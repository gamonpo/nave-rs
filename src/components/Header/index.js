import React from 'react';

import { MaterialIcons } from '@expo/vector-icons'

import { Head, Logo, Icon } from './styles';

import img from '../../images/Logo.png'

export default function Header({ navigation }) {
  return (
    <Head>

      <Icon onPress={() => navigation.goBack()}>
        <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
      </Icon>

      <Logo source={img} />

    </Head>
  );
};

