import { moderateScale } from 'react-native-size-matters';
import styled from 'styled-components/native';
import { AMOUNT_TYPE } from '../../utils';

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacings.largeSpacing}px;
  padding: ${({ theme }) => theme.spacings.mediumSpacing}px;
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radius.mediumRadius}px;
`;

type SalesProps = {
  type: AMOUNT_TYPE;
};

export const Title = styled.Text<SalesProps>`
  font-size: ${moderateScale(20)}px;
  font-weight: bold;
  color: ${({ theme, type }) => theme.colors[type]};
`;

export const Amount = styled.Text<SalesProps>`
  font-size: ${moderateScale(20)}px;
  font-weight: bold;
  color: ${({ theme, type }) => theme.colors[type]};
`;
