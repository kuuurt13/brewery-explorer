import { Brewery } from "./types";

const PAGE_SIZE = 50;
const BASE_URL = "https://api.openbrewerydb.org/breweries";

async function fetchBreweriesByState(
  state: string,
  page: number = 1
): Promise<Brewery[]> {
  try {
    const res = await fetch(
      `${BASE_URL}?by_state=${state}&page=${page}&per_page=${PAGE_SIZE}&sort=name:asc`
    );
    const data = await res.json();

    return data;
  } catch {
    return [];
  }
}

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

export async function getBreweryById(id: string): Promise<Brewery> {
  const res = await fetch(`${BASE_URL}/${id}`);
  const brewery = await res.json();

  return brewery;
}
