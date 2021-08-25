import React, { FC } from 'react';
import { Card, Header } from '../../components';
import { AMOUNT_TYPE } from '../../utils';
import { Wrapper } from './styles';

const Home: FC = () => (
  <Wrapper>
    <Header name="Davi" />

    <Card name="Vendas" amount="$1000" type={AMOUNT_TYPE.SALES} />
    <Card name="Lucros" amount="$2000" type={AMOUNT_TYPE.PROFIT} />
    <Card name="Pedidos" amount="500" type={AMOUNT_TYPE.ORDERS} />
  </Wrapper>
);

export default Home;
