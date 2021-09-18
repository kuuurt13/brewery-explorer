import { GetServerSideProps } from "next";
import { getBreweryById } from "../../api";
import Map from "../../components/Map";
import { Brewery, BreweryDetails } from "../../types";

type Props = {
  brewery: BreweryDetails;
};

type ServerSideProps = {
  params: {
    id: string;
  };
};

export default function BreweryDetailsPage({ brewery }: Props) {
  return (
    <div>
      <h1>{brewery.name}</h1>
      <div>{brewery.street}</div>
      <div>
        {brewery.city} {brewery.state} {brewery.city}
      </div>
      <div>{!!brewery.image && <img src={brewery.image.imageurl} />}</div>
      <Map
        lng={brewery.locationDetails?.lng}
        lat={brewery.locationDetails?.lat}
      />
    </div>
  );
}

export const getServerSideProps = async ({ params }: ServerSideProps) => {
  const brewery = await getBreweryById(params.id);

  if (!brewery) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      brewery,
    },
  };
};
