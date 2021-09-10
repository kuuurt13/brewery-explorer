import ReactToggle from "react-toggle";
import styled from "styled-components";
import { CgMoon, CgSun } from "react-icons/cg";

type Props = {
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function ThemeToggle({ checked, onChange }: Props) {
  return (
    <StyledToggle
      checked={checked}
      onChange={onChange}
      icons={{
        checked: <CgMoon />,
        unchecked: <CgSun />,
      }}
    />
  );
}

const StyledToggle = styled(ReactToggle)`
  .react-toggle-track-check,
  .react-toggle-track-x {
    color: #fff;
    bottom: 5px;
  }

  .react-toggle-track-check {
    left: 6px;
  }

  .react-toggle-track-x {
    right: 12px;
  }

  &.react-toggle .react-toggle-track {
    background-color: #ffe97c;
  }

  &.react-toggle:hover .react-toggle-track {
    background-color: #ffe97c;
    opacity: 0.75;
  }

  &.react-toggle--checked .react-toggle-track {
    background-color: #818cab;
  }

  &.react-toggle--checked:hover .react-toggle-track {
    background-color: #818cab;
    opacity: 0.75;
  }

  &&.react-toggle .react-toggle-thumb {
    border-color: #949393;
  }

  &&.react-toggle:active .react-toggle-thumb,
  &&.react-toggle:focus .react-toggle-thumb {
    box-shadow: 0px 0px 3px 0px #0099e0;
  }
`;
