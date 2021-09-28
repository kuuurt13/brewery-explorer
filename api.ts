import {
  BEER_MAPPING_API_KEY,
  BEER_MAPPING_BASE_URL,
  OBDB_BASE_URL,
} from "./constants";
import {
  Brewery,
  BreweryDetails,
  BreweryMappingImage,
  BreweryMappingLocation,
  BreweryMappingResult,
} from "./types";
import { mapProperties } from "./utils";

const PAGE_SIZE = 50;

export async function getBreweriesByState(
  stateName: string,
  breweries: Brewery[] = [],
  page: number = 0
): Promise<Brewery[]> {
  const data = await fetchBreweriesByState(stateName, (page += 1));
  breweries = [...breweries, ...data];

  if (data.length < PAGE_SIZE) {
    return breweries;
  }

  return await getBreweriesByState(stateName, breweries, page);
}

export async function getBreweryById(id: string): Promise<BreweryDetails> {
  const res = await fetch(`${OBDB_BASE_URL}/${id}`);
  const rawBrewery = await res.json();
  const brewery = mapProperties(rawBrewery, { postal_code: "zip" });

  const details = await getBreweryMappingDetails(brewery);
  const locationDetails = await getBreweryMappingLocation(details.id);
  const image = await getBreweryMappingImage(details.id);

  return { ...brewery, image, locationDetails };
}

export async function getBreweryMappingDetails(
  brewery: Brewery
): Promise<BreweryMappingResult> {
  const res = await fetch(
    `${BEER_MAPPING_BASE_URL}/locquery/${BEER_MAPPING_API_KEY}/${brewery.name}&s=json`
  );
  const breweriesResults: BreweryMappingResult[] = await res.json();
  // Normalizes 12345-123 zip codes
  const zip = brewery.zip.split("-")[0];

  return breweriesResults.find((r) => r.zip === zip) || breweriesResults[0];
}

async function getBreweryMappingLocation(
  id: number
): Promise<BreweryMappingLocation> {
  const res = await fetch(
    `${BEER_MAPPING_BASE_URL}/locmap/${BEER_MAPPING_API_KEY}/${id}&s=json`
  );
  const breweryLocations: BreweryMappingLocation[] = await res.json();

  return {
    ...breweryLocations[0],
    lng: Number(breweryLocations[0].lng),
    lat: Number(breweryLocations[0].lat),
  };
}

async function getBreweryMappingImage(
  id: number
): Promise<BreweryMappingImage> {
  const res = await fetch(
    `${BEER_MAPPING_BASE_URL}/locimage/${BEER_MAPPING_API_KEY}/${id}&s=json`
  );
  const breweryImages: BreweryMappingImage[] = await res.json();

  return breweryImages[0];
}

async function fetchBreweriesByState(
  state: string,
  page: number = 1
): Promise<Brewery[]> {
  try {
    const res = await fetch(
      `${OBDB_BASE_URL}?by_state=${state}&page=${page}&per_page=${PAGE_SIZE}&sort=name:asc`
    );
    const data = await res.json();

    return data;
  } catch {
    return [];
  }
}
