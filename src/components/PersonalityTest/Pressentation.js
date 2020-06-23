import React from 'react';
import { Link, Navigate } from '@reach/router';
import { Card } from 'components/Layout';
import { LinkButton, Button } from 'components/Button';

const Pressentation = () => (
  <Card>
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
  </Card>
);

export default Pressentation;
