import styled from 'styled-components/native';

import Constants from 'expo-constants';

import colors from '../../style/colors';
import { exp } from 'react-native-reanimated';

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.white};
`;

export const Header = styled.View`
    flex-direction: row;
    top: ${Constants.statusBarHeight+ 'px'};
    align-items: center;
    justify-content: center;
    height: 64px;
    background-color: ${colors.head};
    border-bottom-width: 0.4px;
    elevation: 10;
    border-color: ${colors.secondary};
`;

export const Logo = styled.Image`
    width:  156px;
    height: 40px;
`;

export const Icon = styled.TouchableOpacity`
    right: 80px;
    width: 24px;
    height: 24px;
`;

export const SubHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    top: 50px;
`;

export const Title = styled.Text`
    font-size: 22px;
    left: 20px;
`;

export const BTitle = styled.Text`
    font-size: 14px;
    color: ${colors.white};
`;

export const Add = styled.TouchableOpacity`
    background: ${colors.primary};
    width: 155px;
    height: 40px;  
    align-items: center;
    justify-content: center;
    right: 30px;
`;

export const Navers = styled.FlatList`
    top: 65px;
`;

export const Naver = styled.View`
    margin: 20px 10px;
`;

export const Img = styled.Image``;

export const Name = styled.Text`
    font-size: 14px;
    top: 10px;
`;

export const Ocuppation = styled.Text`
    font-size: 14px;
    top: 10px;
`;

export const Action = styled.View`
    flex-direction: row;
    top: 15px;
`;

export const Delete = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
    left: 5px;
`;

export const Edit = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
    left: 10px;
`;

