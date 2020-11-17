import styled from 'styled-components/native'

import colors from '../../style/colors'

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.white};
`

export const Input = styled.TextInput`
    width: 328px;
    height: 40px;
    padding: 5px;
    border: 1px solid ${colors.border};
    background-color: ${colors.white};
    top: 2px;
`

export const Label = styled.Text`
    font-size: 14px;
    color: ${colors.primary};
`
