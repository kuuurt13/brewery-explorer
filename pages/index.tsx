import { useState } from "react";
import styled from "styled-components";
import ButtonLink from "../components/ButtonLink";
import ButtonLinkList from "../components/ButtonLinkList";
import ListSearch from "../components/ListSearch";
import states from "../data/states.json";
import { State } from "../types";

type Props = {
  states: State[];
};

export default function Home({ states }: Props) {
  const [filteredStates, setFilteredStates] = useState(states);

  return (
    <StyledWrapper>
      <ListSearch
        searchProperty="name"
        placeholder="Search States"
        results={states}
        onResultsChange={setFilteredStates}
      />
      <ButtonLinkList>
        {filteredStates.map((state) => (
          <ButtonLink
            key={state.id}
            href={`/browse/states/${state.id}`}
            title={state.name}
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

export async function getStaticProps() {
  return {
    props: {
      states,
    },
  };
}
