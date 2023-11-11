import { createGlobalStyle } from "styled-components";
import { Quicksand } from "next/font/google"

const quicksand = Quicksand({ subsets: ["latin"], weight: "400", });

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root{
    --light-cream: #FEF6F2
  }

  body {
    background-color: #876a55;
    overflow: hidden;
    font-family: ${quicksand.style.fontFamily};
    font-weight: bold;
    color: var(--light-cream);
  }
`;
