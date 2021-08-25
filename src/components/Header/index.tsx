import React, { FC } from 'react';
import { Title, Wrapper } from './styles';

type Props = {
  name: string;
};

const Header: FC<Props> = ({ name }) => (
  <Wrapper>
    <Title>{`Olá, ${name}`}</Title>
  </Wrapper>
);
export default Header;
