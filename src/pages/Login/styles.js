import styled from 'styled-components/native';

import Constants from 'expo-constants';

import colors from '../../style/colors';

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.white};
`;

export const Header = styled.View`
    flex-grow: 0.4;
    padding-top: ${Constants.statusBarHeight+ 'px'};
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    width:  156px;
    height: 40px;
`;

export const Form = styled.View`
    flex-grow: 0.6;
    align-items: center;
`;

export const Item = styled.View`
    margin: 15px;
`;

export const EInput = styled.TextInput`
    width: 328px;
    height: 40px;
    padding: 5px;
    border: 1px solid ${colors.border};
    background-color: ${colors.white};
`;

export const PInput = styled.TextInput`
    width: 328px;
    height: 40px;
    padding: 5px;
    border: 1px solid ${colors.border};
    background-color: ${colors.white};
`;

export const ELabel = styled.Text`
    font-size: 14px;
    color: ${colors.primary};
    bottom: 5px;
`;

export const PLabel = styled.Text`
    font-size: 14px;
    color: ${colors.primary};
    bottom: 5px;
`;

export const BLabel = styled.Text`
    font-size: 14px;
    color: ${colors.white};
`;

export const Button = styled.TouchableOpacity`
    width: 328px;
    height: 40px;
    background-color: ${colors.primary};
    align-items: center;
    justify-content: center;
    top: 20px;
`;