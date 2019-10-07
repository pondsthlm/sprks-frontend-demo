import React from 'react';
//import { useStore } from 'store';
import styled from 'styled-components/macro';
import Ipsum from 'components/Ipsum';
import Image, { backgroundImageCss } from 'components/Image';
import TextBlock from 'components/TextBlock';

const Images = styled.div`
  padding: 20%;
`;
const Wrapper = styled.div`
  position: relative;
`;

const Head = styled.div`
  color: #fff;
  height: 50vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  ${p => backgroundImageCss(p.bgImage)}
`;

const ImageSquare = styled(Image)`
  height: 400px;
  width: auto;
`;

const Page = ({ page }) => {
  //const { state, actions } = useStore();
  const { title, image, content } = page;
  return (
    <Wrapper>
      <Head bgImage={image}>
        <h2>{title}</h2>
      </Head>
      <span>page:</span>
      <Ipsum />

      <Images>
        <span>Look at me im not in the center on original image</span>
        <br />
        <ImageSquare ratio={true} src={image} />
      </Images>
      <TextBlock blocks={content} />
    </Wrapper>
  );
};

export default Page;
