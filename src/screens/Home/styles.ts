import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  padding-top: ${({ theme }) => theme.spacings.giantSpacing}px;
  padding-horizontal: ${({ theme }) => theme.spacings.mediumSpacing}px;
  background-color: ${({ theme }) => theme.colors.background};
`;
