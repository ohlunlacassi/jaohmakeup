import styled from "styled-components";

const StyledH1 = styled.h1`
    font-size: 1.1rem;
    letter-spacing: 0.05rem;
    margin: 0;
`

const StyledH2 = styled.h2`
    font-size: 1rem;
    letter-spacing: 0.05rem;
    margin: 0;
`

export default function Header() {
    return (
        <>
            <StyledH1>PHATJIRA RUNGSAKULLIKIT</StyledH1>
            <StyledH2>JAOH | Makeup Artist</StyledH2>
        </>
    )
}