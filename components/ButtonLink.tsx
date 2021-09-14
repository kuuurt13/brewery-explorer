import { ForwardedRef, forwardRef } from "react";
import Link, { LinkProps } from "next/link";
import styled from "styled-components";

type Props = {
  href: string;
  title: string;
};

type ButtonProps = LinkProps & Props;

const Button = forwardRef(
  ({ title, href }: ButtonProps, ref: ForwardedRef<HTMLAnchorElement>) => (
    <a href={href} ref={ref}>
      <h3>{title}</h3>
      <StyledArrow>
        <div></div>
        <div></div>
      </StyledArrow>
    </a>
  )
);

export default function ButtonLink(props: Props) {
  return (
    <Link href={props.href} passHref>
      <StyledWrapper>
        <Button {...props} />
      </StyledWrapper>
    </Link>
  );
}

const StyledArrow = styled.div`
  position: relative;
  max-width: 6%;
  margin-left: auto;
  transition: 500ms ease-in-out;

  div:first-child {
    width: 100%;
    border: solid 1px ${({ theme }) => theme.colors.font};
  }

  div:last-child {
    position: absolute;
    width: 0;
    height: 0;
    right: -5px;
    top: -4px;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid ${({ theme }) => theme.colors.font};
  }
`;

const StyledWrapper = styled.div`
  padding: 1rem;
  border: solid 1px ${({ theme }) => theme.colors.font};

  h3 {
    margin: 0 0 2rem 0;
    transition: 500ms ease-in-out;
  }

  a {
    text-decoration: none;
  }

  &:hover ${StyledArrow} {
    max-width: 7%;
  }

  &:hover h3 {
    margin-left: 0.3rem;
  }
`;
