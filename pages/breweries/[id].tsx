import { GetServerSideProps } from "next";
import { getBreweryById } from "../../api";
import { Brewery } from "../../types";

type Props = {
  brewery: Brewery;
};

export default function BreweryDetails({ brewery }: Props) {
  return (
    <div>
      <h1>{brewery.name}</h1>
      <div>{brewery.street}</div>
      <div>
        {brewery.city} {brewery.state} {brewery.city}
      </div>
    </div>
  );
}

type ServerSideProps = {
  params: {
    id: string;
  };
};

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
