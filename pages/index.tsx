import ButtonLink from "../components/ButtonLink";
import ButtonLinkList from "../components/ButtonLinkList";
import states from "../data/states.json";
import { State } from "../types";

type Props = {
  states: State[];
};

export default function Home({ states }: Props) {
  return (
    <ButtonLinkList>
      {states.map((state) => (
        <div key={state.id}>
          <ButtonLink href={`/browse/states/${state.id}`} title={state.name} />
        </div>
      ))}
    </ButtonLinkList>
  );
}

export async function getStaticProps() {
  return {
    props: {
      states,
    },
  };
}
