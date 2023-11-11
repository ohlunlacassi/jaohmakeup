import styled from "styled-components";
import Image from "next/image";

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;
export default function StyledImage() {
    return (
        <ImageContainer>
            <Image
                src="/jaohxbeauty.png"
                alt="Jaoh's logo"
                width={525}
                height={245}
                priority={true}
            />
        </ImageContainer>
        
    )
   
}