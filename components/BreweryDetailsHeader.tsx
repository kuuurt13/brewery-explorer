import styled from "styled-components";
import { BreweryDetails } from "../types";

type Props = {
  brewery: BreweryDetails;
};

export default function BreweryDetailsHeader({ brewery }: Props) {
  return (
    <StyledWrapper>
      <div>{!!brewery.image && <img src={brewery.image.imageurl} />}</div>
      <div>
        <h2>{brewery.name}</h2>
        <div>{brewery.street}</div>
        <div>
          {brewery.city} {brewery.state} {brewery.city}
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  margin: 2rem 0;
  justify-content: flex-start;

  h2 {
    margin-top: 0;
  }

  img {
    max-width: 10rem;
    margin-right: 1rem;
  }
`;
