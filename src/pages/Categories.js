import React from 'react';
//import { useStore } from 'store';
import styled, { css } from 'styled-components/macro';
import { useStore } from 'store';
import A from 'components/A';
import BackgroundFilter from '../components/BackgroundFilter';

const Wrapper = styled.div`
  position: relative;
`;

const CardStyle = styled.article`
  position: relative;
  height: 100vh;

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
  const { title, slug, images } = category;
  return (
    <CardStyle>
      <BackgroundFilter image={images[0]} filter={index} />
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
