import { moderateScale } from 'react-native-size-matters';
import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView``;

export const Title = styled.Text`
  font-size: ${moderateScale(24)}px;
  color: ${({ theme }) => theme.colors.contrast};
`;
