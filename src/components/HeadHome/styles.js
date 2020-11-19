import styled from 'styled-components/native';

import Constants from 'expo-constants';

import colors from '../../style/colors';

export const Head = styled.View`
  flex-direction: row;
  top: ${Constants.statusBarHeight + 'px'};
  align-items: center;
  justify-content: center;
  height: 64px;
  background-color: ${colors.head};
  border-bottom-width: 0.4px;
  elevation: 10;
  border-color: ${colors.secondary};
`;

export const Logo = styled.Image`
  width: 156px;
  height: 40px;
`;

export const Icon = styled.TouchableOpacity`
  right: 80px;
  width: 24px;
  height: 24px;
`;
