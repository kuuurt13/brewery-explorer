export type State = {
  name: string;
  id: string;
};

export type Brewery = {
  id: number;
  name: string;
  state: string;
  street: string;
  city: string;
  postal_code: string;
  zip: string;
  country: string;
  phone: string;
};

export type BreweryMappingResult = {
  id: number;
  name: string;
  status: string;
  reviewlink: string;
  proxylink: string;
  blogmap: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone: string;
  url: string;
  overall: string;
  imagecount: string;
};

export type BreweryMappingLocation = {
  name: string;
  status: string;
  lat: number;
  lng: number;
  map: string;
  altmap: string;
};

export type BreweryMappingImage = {
  imageid: string;
  directurl: string;
  imageurl: string;
  width: string;
  height: string;
  thumburl: string;
  caption: string;
  credit: string;
  crediturl: string;
  imagedate: string;
  score: string;
};

export type BreweryDetails = Brewery & {
  image?: BreweryMappingImage;
  locationDetails: BreweryMappingLocation;
};
