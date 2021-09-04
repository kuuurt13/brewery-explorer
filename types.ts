export type State = {
  name: string;
  id: string;
};

export type Brewery = {
  id: number;
  name: string;
  state: string;
  street: string;
  address_2?: string;
  address_3?: string;
  city: string;
  postal_code: string;
  country: string;
  brewery_type: string;
  phone: string;
  obdb_id: string;
};
