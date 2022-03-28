import { getBreweryById } from "../../api";
import BreweryDetailsHeader from "../../components/BreweryDetailsHeader";
import Map from "../../components/Map";
import { BreweryDetails } from "../../types";

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
    <>
      <BreweryDetailsHeader brewery={brewery} />
      <Map
        lng={brewery.locationDetails?.lng}
        lat={brewery.locationDetails?.lat}
      />
    </>
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
