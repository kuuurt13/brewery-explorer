import Link from "next/link";
import { getBreweriesByState } from "../../../api";
import ButtonLink from "../../../components/ButtonLink";
import ButtonLinkList from "../../../components/ButtonLinkList";
import states from "../../../data/states.json";
import { Brewery } from "../../../types";

type Props = {
  breweries: Brewery[];
};

type StaticProps = {
  params: {
    state: string;
  };
};

export default function BreweriesByState({ breweries }: Props) {
  return (
    <ButtonLinkList>
      {breweries.map((brewery) => (
        <div key={brewery.id}>
          <ButtonLink href={`/breweries/${brewery.id}`} title={brewery.name} />
        </div>
      ))}
    </ButtonLinkList>
  );
}

export async function getStaticPaths() {
  const paths = states.map((state) => ({
    params: { state: state.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: StaticProps) {
  const breweries = await getBreweriesByState(params.state);

  return {
    props: {
      breweries,
    },
  };
}
