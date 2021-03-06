import { ForwardedRef, forwardRef } from "react";
import NextLink, { LinkProps } from "next/link";
import styled from "styled-components";

type Props = {
  href: string;
  children: string;
  className?: string;
};

const Link = forwardRef(
  ({ href, children }: Props, ref: ForwardedRef<HTMLAnchorElement>) => (
    <a href={href} ref={ref}>
      <h3>{children}</h3>
      <StyledArrow></StyledArrow>
    </a>
  )
);

export default function ButtonLink({ href, className, ...props }: Props) {
  return (
    <NextLink href={href} passHref>
      <StyledWrapper className={className}>
        <Link href={href} {...props} />
      </StyledWrapper>
    </NextLink>
  );
}

const StyledArrow = styled.div`
  position: relative;
  max-width: 2vw;
  top: -5px;
  right: 1px;
  margin-left: auto;
  transition: 500ms ease-in-out;
  border: solid 1px ${({ theme }) => theme.colors.font};

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    right: -2px;
    top: -5px;
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
    max-width: 2.5vw;
  }

  &:hover h3 {
    margin-left: 0.3rem;
  }
`;
