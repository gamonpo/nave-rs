import { StatusBar } from 'expo-status-bar'
import React from 'react'

import { AppLoading } from 'expo'

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold
} from '@expo-google-fonts/montserrat'

import Routes from './src/routes'

export default function App () {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <Routes />
      <StatusBar style={'dark'} />
    </>
  )
}
