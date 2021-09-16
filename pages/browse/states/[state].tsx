import { useState } from "react";
import styled from "styled-components";
import { getBreweriesByState } from "../../../api";
import ButtonLink from "../../../components/ButtonLink";
import ButtonLinkList from "../../../components/ButtonLinkList";
import ListSearch from "../../../components/ListSearch";
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
  const [filteredBreweries, setFilteredBreweries] = useState(breweries);

  return (
    <StyledWrapper>
      <ListSearch
        searchProperty="name"
        placeholder="Search Breweries"
        results={breweries}
        onResultsChange={setFilteredBreweries}
      />
      <ButtonLinkList>
        {filteredBreweries.map((brewery) => (
          <ButtonLink
            key={brewery.id}
            href={`/breweries/${brewery.id}`}
            title={brewery.name}
          />
        ))}
      </ButtonLinkList>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > *:first-child {
    width: 40%;
    margin: 1rem auto 3rem auto;
  }
`;

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
