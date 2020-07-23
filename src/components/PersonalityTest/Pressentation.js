import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';

import { LinkButton } from 'components/Button';

import Progress from './Progress';
import { caracters } from './data';

const Text = styled.div`
  white-space: pre-line;
  h1 {
    font-size: 54px;
    font-weight: 900;
    line-height: 1.11;
    margin-bottom: 27px;
  }
  p {
    font-size: 18px;
    font-weight: bold;
    line-height: 1.33;
    margin-bottom: 27px;
  }
  a {
    display: block;
  }
`;

export const WaitForResult = ({ resultUrl }) => {
  const [wait, setWait] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setWait(false);
    }, 3000);
    return () => {
      setWait(false);
      clearTimeout(timer);
    };
  }, []);

  return (
    <Text>
      <h1>Hurra, dags att se vem du blev …</h1>
      <p>
        Kom ihåg att det här testet bara en indikation! Du vet bäst vem du är
        och borde såklart prova vilken aktivitet du vill.
      </p>
      {!wait && <LinkButton to={resultUrl}>Se ditt resultat</LinkButton>}
      <Progress index={10} animate={wait} />
    </Text>
  );
};

export const Pressentation = () => (
  <Text>
    <h1>Vilken personlighet är du?</h1>
    <p>
      I det här personlighetstestet kommer du få svara på tio frågor om dig
      själv. Du får två svar som du måste välja mellan. Välj det du tycker
      passar in bäst på dig själv. Det tar bara 3 minuter!
    </p>
    <p>
      När du gjort testet får en profil som vi tror matchar in på dig. Så du kan
      se dels sånt du vet att du tycker om, men kanske också lite tips på en del
      oväntade grejer som du kanske inte visste passade en profil som du!
    </p>
    <LinkButton to="/test/questions">Starta testet!</LinkButton>
  </Text>
);

export const Result = props => {
  console.log({ props });
  //props.character = caracter name part of url
  const result = caracters.find(c => c.url === props.character);
  const { image, title, text } = result;
  return (
    <Text>
      <h1>{title}</h1>
      <p>{text}</p>
    </Text>
  );
};

export default Pressentation;
