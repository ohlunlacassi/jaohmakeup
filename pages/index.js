import styled from "styled-components";
import Image from "next/image";
import Header from "@/components/Layout/Header";
import Nav, { StyledLink } from "@/components/Layout/Nav";
import StyledImage from "@/components/StyledImage";
import Paragraph from "@/components/Paragraph";

const EmailLink = styled(StyledLink)`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 1rem;
  text-decoration: underline;
  display: flex;
  align-items: center;
`;

const Shortcut = styled(Image)`
  margin-left: 0.2rem;
`;

export default function HomePage() {
  return (
    <>
      <Header />
      <Nav />
      <StyledImage />
      <Paragraph>I AM A MAKEUP ARTIST BASED IN MUNICH, GERMANY AND INTERNATIONAL</Paragraph>
      <EmailLink href="mailto:jaohmakeup@gmail.com">
      jaohmakeup@gmail.com<Shortcut src="/shortcut.png" width={20} height={20} />
      </EmailLink>
    </>
  );
}
