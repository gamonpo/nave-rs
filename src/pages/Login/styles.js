import styled from 'styled-components/native'

import Constants from 'expo-constants'

export const Header = styled.View`
    flex-grow: 0.4;
    padding-top: ${Constants.statusBarHeight + 'px'};
    align-items: center;
    justify-content: center;
`

export const Logo = styled.Image`
    width:  156px;
    height: 40px;
`

export const Form = styled.View`
    flex-grow: 0.6;
    align-items: center;
`

export const Item = styled.View`
    margin: 15px;
`
