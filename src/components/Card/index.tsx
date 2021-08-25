import React, { FC } from 'react';
import { AMOUNT_TYPE } from '../../utils';
import { Amount, Title, Wrapper } from './styles';

type Props = {
  name: string;
  amount: string;
  type: AMOUNT_TYPE;
};

const Card: FC<Props> = ({ name, amount, type = AMOUNT_TYPE.SALES }) => (
  <Wrapper>
    <Title type={type}>{name}</Title>
    <Amount type={type}>{amount}</Amount>
  </Wrapper>
);
export default Card;
