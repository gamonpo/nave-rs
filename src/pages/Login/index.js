import React from 'react';

import { useFonts, Montserrat_400Regular, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';

import { AppLoading } from 'expo';

import { 
  Container, 
  Header, 
  Logo, 
  Form,
  Item,
  EInput,
  PInput, 
  ELabel, 
  PLabel,
  BLabel,
  Button, 
} from './styles';

import img from '../../images/Logo.png';

export default function Login({ navigation }) {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Container>
      <Header>
        <Logo source={img} />

      </Header>

      <Form>

        <Item>
          <ELabel 
            style={
              { 
                fontFamily: 'Montserrat_600SemiBold' 
              }
            }
          >
            Email
          </ELabel>


            <EInput 
              placeholder={'E-mail'} 
              style={{ fontFamily: 'Montserrat_400Regular' }}
            />


        </Item>

        <Item>
          <PLabel 
            style={
              { 
                fontFamily: 'Montserrat_600SemiBold' 
              }
            }
          >
            Senha
          </PLabel>

          <PInput  
            placeholder={'Senha'} 
            style={{ fontFamily: 'Montserrat_400Regular' }}
          /> 
          
        </Item>

        <Button onPress={() => navigation.navigate('Menu')}>
          <BLabel>Entrar</BLabel>
        </Button>
      </Form>
      
    </Container>
  );
};

