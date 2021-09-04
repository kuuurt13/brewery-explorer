import Link from "next/link";
import states from "../data/states.json";
import { State } from "../types";

type Props = {
  states: State[];
};

export default function Home({ states }: Props) {
  return states.map((state) => (
    <div key={state.id}>
      <Link href={`/browse/states/${state.id}`}>{state.name}</Link>
    </div>
  ));
}

export async function getStaticProps() {
  return {
    props: {
      states,
    },
  };
}
