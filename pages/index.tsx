import styled from "styled-components";
import ButtonLink from "../components/ButtonLink";
import states from "../data/states.json";
import { State } from "../types";

type Props = {
  states: State[];
};

export default function Home({ states }: Props) {
  return (
    <StyledWrapper>
      {states.map((state) => (
        <div key={state.id}>
          <ButtonLink href={`/browse/states/${state.id}`} title={state.name} />
        </div>
      ))}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  > div {
    flex: 0 0 32.5%;
    margin-bottom: 1.3%;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      states,
    },
  };
}
