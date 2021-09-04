import Link from "next/link";
import { getBreweriesByState } from "../../../api";
import states from "../../../data/states.json";
import { Brewery, State } from "../../../types";

type Props = {
  breweries: Brewery[];
};

export default function BreweriesByState({ breweries }: Props) {
  return breweries.map((brewery) => (
    <div key={brewery.id}>
      <Link href={`/breweries/${brewery.id}`}>{brewery.name}</Link>
    </div>
  ));
}

export async function getStaticPaths() {
  const paths = states.map((state) => ({
    params: { state: state.id },
  }));

  return { paths, fallback: false };
}

type StaticProps = {
  params: {
    state: string;
  };
};

export async function getStaticProps({ params }: StaticProps) {
  const breweries = await getBreweriesByState(params.state);

  return {
    props: {
      breweries,
    },
  };
}
