import React from 'react';

import { Feather } from '@expo/vector-icons';

import { Head, Logo, Icon } from './styles';

import img from '../../images/Logo.png';

export default function HeadHome({ navigation }) {
  return (
    <Head>
      <Icon onPress={() => navigation.navigate('Sair')}>
        <Feather name="log-out" size={24} color="black" />
      </Icon>

      <Logo source={img} />
    </Head>
  );
}
