import React from 'react';
//import { useStore } from 'store';
import styled, { css } from 'styled-components/macro';
import { useStore } from 'store';
import { backgroundImageCss } from 'components/Image';
import A from 'components/A';

const Wrapper = styled.div`
  position: relative;
`;

const effects = [
  css`
    opacity: 0.75;
    background-blend-mode: screen;
    background-image: linear-gradient(
      to bottom,
      rgb(0, 180, 155),
      rgb(0, 180, 155)
    );
  `,
  css`
    opacity: 0.75;
    background-blend-mode: screen;
    background-image: linear-gradient(
      to bottom,
      rgb(240, 0, 128),
      rgb(240, 0, 128)
    );
  `,
  css`
    opacity: 0.75;
    background-blend-mode: screen;
    background-image: linear-gradient(
      to bottom,
      rgb(225, 240, 0),
      rgb(225, 240, 0)
    );
  `,
];

const getEffect = index => effects[index % effects.length];

const CardStyle = styled.article`
  position: relative;
  height: 100vh;
  background-size: cover;
  ${p => p.image && backgroundImageCss(p.image)}
  padding: 30px 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  ::before {
    content: '';
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.75;
    ${p => p.effect}
  }
`;

const CardLink = styled(A)`
  position: relative;
  background: #000;
  display: block;
  text-decoration: none;
  color: #fff;
  padding: 24px;
  section {
    color: #fff;
  }
  h1 {
    font-size: 36px;
    font-weight: 900;
    line-height: 1.17;
    padding-bottom: 0.34em;
  }
  p {
    font-size: 16px;
    font-weight: 900;
    line-height: 1.5;
  }
`;

const CardAction = ({ title, content, href }) => {
  return (
    <CardLink href={href}>
      <section>
        <h1>{title}</h1>
        {content && content.map((c, i) => <p key={`cl_${i}`}>{c}</p>)}
      </section>
    </CardLink>
  );
};

const Card = ({ index, category }) => {
  console.log('getEffect', getEffect(index));

  const { title, slug, images } = category;
  return (
    <CardStyle image={images[0]} effect={getEffect(index)}>
      <CardAction
        title={title}
        content={['Imorgon 18:00', '+ 3 andra tillfällen']}
        href={`/c/${slug}`}
      />
    </CardStyle>
  );
};

const Page = ({ page }) => {
  const { state } = useStore();
  const { categories } = state;
  console.log('categories', categories);

  if (!categories) return null;
  return (
    <Wrapper>
      {categories.map((c, i) => (
        <Card index={i} key={c._id} category={c} />
      ))}
    </Wrapper>
  );
};

export default Page;