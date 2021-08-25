import React, { FC } from 'react';
import { Title, Wrapper } from './styles';

type Props = {
  name: string;
};

const Header: FC<Props> = ({ name }) => (
  <Wrapper>
    <Title>{`OLÁ, ${name}`}</Title>
  </Wrapper>
);
export default Header;
