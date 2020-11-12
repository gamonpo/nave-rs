import React, { useState } from 'react';

import { FlatList } from 'react-native'

import { Feather, MaterialIcons, Foundation } from '@expo/vector-icons'

import { useFonts, Montserrat_400Regular, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';

import { AppLoading } from 'expo';

import { 
  Container, 
  Header, 
  Logo, 
  Icon,
  SubHeader,
  Title,
  BTitle, 
  Add,
  Navers,
  Naver,
  Img,
  Name,
  Ocuppation,
  Action,
  Delete,
  Edit
} from './styles';

import img from '../../images/Logo.png'
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import img4 from '../../images/img4.png'

export default function Home({ navigation }) {
  const devs = [
    {
      id: 1,
      name: 'Juliano Reis',
      occupation: 'Front-end Developer',
      picture: img1
    },
    {
      id: 2,
      name: 'Gabriel do Couto',
      occupation: 'Front-end Developer',
      picture: img2
    },
    {
      id: 3,
      name: 'Eduardo Bittencourt',
      occupation: 'Front-end Developer',
      picture: img3
    },
    {
      id: 4,
      name: 'Gustavo Pinho',
      occupation: 'Front-end Developer',
      picture: img4
    },
  ]

  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const renderItem = ({item}) => (
      <Naver>
        <Img source={item.picture} />

        <Name 
          style={{ fontFamily: 'Montserrat_600SemiBold' }}
        >
          {item.name}
        </Name>
        <Ocuppation 
          style={{ fontFamily: 'Montserrat_400Regular' }}
        >
          {item.occupation}
        </Ocuppation>

        <Action>
          <Delete>
            <Foundation name="trash" size={20} color="black" />
          </Delete>

          <Edit>
            <MaterialIcons name="edit" size={20} color="black" />
          </Edit>
        </Action>

      </Naver>
    
  );

  return (
    <Container>
      <Header>

       <Icon onPress={() => navigation.openDrawer()}>
         <Feather name="menu" size={24} color="black" />
       </Icon>

       <Logo source={img} />

      </Header>

      <SubHeader>
        <Title style={{ fontFamily: 'Montserrat_600SemiBold' }}>Navers</Title>

        <Add>
          <BTitle>Adicionar naver</BTitle>
        </Add>
      </SubHeader>


      <Navers
        data={devs}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center' }}
        numColumns={2}
      />
        

    </Container>
  );
}