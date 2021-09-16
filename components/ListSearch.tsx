import { ChangeEvent } from "react";
import styled from "styled-components";
import useDebounce from "../hooks/useDebounce";

type Props = {
  searchProperty: string;
  results: any[];
  placeholder?: string;
  onResultsChange: (results: any[]) => void;
};

export default function ListSearch({
  searchProperty,
  results,
  placeholder = "Search",
  onResultsChange,
}: Props) {
  const handleInputChangeDebounced = useDebounce(handleInputChange, 300);

  function handleInputChange({ target }: ChangeEvent<HTMLInputElement>) {
    const term = (target.value || "").toLowerCase();

    onResultsChange(
      results.filter((result) =>
        result[searchProperty].toLowerCase().includes(term)
      )
    );
  }

  return (
    <StyledInput
      placeholder={placeholder}
      onChange={handleInputChangeDebounced}
    />
  );
}

const StyledInput = styled.input`
  font-size: 1.5rem;
  padding: 1rem;
`;
