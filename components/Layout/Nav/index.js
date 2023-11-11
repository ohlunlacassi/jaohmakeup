import styled from "styled-components";
import Link from "next/link";

const NavContainer = styled.div`
    display: flex;
    gap: 3rem;
    position: relative;
    left: 70rem;
    bottom: 2.5rem;
`

export const StyledLink = styled(Link)`
    font-size: 1.2rem;
    text-decoration: none;
    color: var(--light-cream);
`

export default function Nav() {
    return (
        <NavContainer>
            <StyledLink href="/">Portfolio</StyledLink>
            <StyledLink href="/">About</StyledLink>
            <StyledLink href="/">Contact</StyledLink>
        </NavContainer>
    )
}