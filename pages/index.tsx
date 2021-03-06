import styled from "styled-components";
import BarChart from "../components/BarChart";
import ButtonLink from "../components/ButtonLink";
import useBreweries from "../hooks/useBreweries";
import { sortByProperty } from "../utils";

export default function Home() {
  const allBreweries = useBreweries();
  const [mostBreweries, leastBreweries] = getBreweriesByStates();

  function getBreweriesByStates() {
    const sortedBreweries = sortByProperty(allBreweries, "totalBreweries").map(
      (stateBreweries) => ({
        name: stateBreweries.name,
        value: stateBreweries.totalBreweries,
      })
    );

    return [sortedBreweries.slice(0, 10), sortedBreweries.slice(-10).reverse()];
  }

  return (
    <>
      <StyledSection>
        <h2>Most Breweries By State</h2>
        <StyledChartWrapper>
          <BarChart data={mostBreweries} barTitle="Breweries" />
        </StyledChartWrapper>
      </StyledSection>
      <StyledSection>
        <h2>Least Breweries By State</h2>
        <StyledChartWrapper>
          <BarChart data={leastBreweries} barTitle="Breweries" />
        </StyledChartWrapper>
      </StyledSection>
      <StyledButtonLink href="/browse">
        Explorer Breweries By State
      </StyledButtonLink>
    </>
  );
}

const StyledSection = styled.section`
  margin-bottom: 7rem;
`;

const StyledChartWrapper = styled.div`
  height: 60vh;
`;

const StyledButtonLink = styled(ButtonLink)`
  max-width: 250px;
  margin: 5rem auto;
`;
