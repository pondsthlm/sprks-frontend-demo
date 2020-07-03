import React from 'react';
//import { useStore } from 'store';
import styled, { css } from 'styled-components/macro';
import { useStore } from 'store';
import A from 'components/A';
import Background from 'components/Background';

const ScrollSnapperWrapper = styled.div`
  position: relative;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  > article {
    scroll-snap-align: start;
  }
`;

const CardStyle = styled.article`
  position: relative;
  overflow: hidden;
  height: 80vh;

  padding: 30px 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const CardLink = styled(A)`
  position: relative;
  background: #000;
  display: block;
  text-decoration: none;
  color: #fff;
  padding: 24px;
  z-index: 2;
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

  ${p => p.fixedCard && 'position: fixed; width: 92%; bottom: 30px;'}
`;

const CardAction = ({ title, content, href, fixedCard }) => {
  return (
    <CardLink href={href} fixedCard={fixedCard}>
      <section>
        <h1>{title}</h1>
        {content && content.map((c, i) => <p key={`cl_${i}`}>{c}</p>)}
      </section>
    </CardLink>
  );
};

const SnapCard = ({ index, category, fixedCard }) => {
  const { title, slug, images, video } = category;
  return (
    <CardStyle>
      <Background image={images[0]} filterNumber={index} video={video} />
      <CardAction
        fixedCard={fixedCard}
        title={title}
        content={['Imorgon 18:00', `+ 3 andra ${slug && slug.current}`]}
        href={slug && slug.current}
      />
    </CardStyle>
  );
};

const Page = ({ page, fixedCard }) => {
  const { state } = useStore();
  const { categories } = state;

  if (!categories) return null;
  return (
    <ScrollSnapperWrapper>
      {categories.map((c, i) => (
        <SnapCard index={i} key={c._id} category={c} fixedCard={fixedCard} />
      ))}
    </ScrollSnapperWrapper>
  );
};

export default Page;
