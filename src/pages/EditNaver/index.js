import React, { useState } from 'react';
import api from '../../services/api';

import { ScrollView, Alert } from 'react-native';

import { parseISO, format } from 'date-fns';

import Header from '../../components/Header';
import { Container, Input, Label } from '../../components/Form/styles';
import { Button } from '../../components/LargeButton/styles';

import { Title, Info } from './styles';
import colors from '../../style/colors';

export default function EditNaver({ route, navigation }) {
  const { item } = route.params;

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRiMjIxYjI1LTc5NDUtNDBlYy1iMTczLTJlNWI1Mzc2OWFmMyIsImVtYWlsIjoiZ2Ftb25wb0BvdXRsb29rLmNvbSIsImlhdCI6MTYwNTczNzExMX0.P_pf0qqbONox7wUd2nlTI-crA-d_0H_SuygnLKiMJ30';

  const [name, setName] = useState();
  const [role, setRole] = useState();
  const [age, setAge] = useState();
  const [time, setTime] = useState();
  const [project, setProject] = useState();
  const [url, setUrl] = useState();

  const ad_date = parseISO(item.admission_date);
  const bir_date = parseISO(item.birthdate);

  const ad_date_formated = format(ad_date, "dd'/'MM'/'yyyy");
  const bir_date_formated = format(bir_date, "dd'/'MM'/'yyyy");

  const editNaver = () => {
    try {
      async function changeNaver() {
        console.log(time);
        console.log(age);

        const response = await api.put(
          `navers/${item.id}`,
          {
            job_role: role,
            admission_date: time,
            birthdate: age,
            project: project,
            name: name,
            url: url,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log(response.data);

        if (response) {
          Alert.alert('Alterado com sucesso!');

          navigation.navigate('Home');
        }
      }
      changeNaver();
    } catch (error) {
      Alert.alert('Não foi possível alterar este naver!');
    }
  };

  return (
    <Container>
      <Header navigation={navigation} />

      <ScrollView contentContainerStyle={{ paddingVertical: 50 }}>
        <Title>
          <Label style={{ fontSize: 22 }}>Editar Naver</Label>
        </Title>

        <Info>
          <Label
            style={{
              fontFamily: 'Montserrat_600SemiBold',
              margin: 4,
            }}
          >
            Nome
          </Label>

          <Input
            defaultValue={item.name}
            value={name}
            editable={true}
            style={{ fontFamily: 'Montserrat_400Regular', margin: 4 }}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => setName(text)}
          />

          <Label
            style={{
              fontFamily: 'Montserrat_600SemiBold',
              margin: 4,
            }}
          >
            Cargo
          </Label>

          <Input
            defaultValue={item.job_role}
            value={role}
            style={{ fontFamily: 'Montserrat_400Regular', margin: 4 }}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => setRole(text)}
            value={role}
          />

          <Label
            style={{
              fontFamily: 'Montserrat_600SemiBold',
              margin: 4,
            }}
          >
            Idade
          </Label>

          <Input
            defaultValue={bir_date_formated}
            value={age}
            style={{ fontFamily: 'Montserrat_400Regular', margin: 4 }}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => setAge(text)}
          />

          <Label
            style={{
              fontFamily: 'Montserrat_600SemiBold',
              margin: 4,
            }}
          >
            Tempo de empresa
          </Label>

          <Input
            defaultValue={ad_date_formated}
            value={time}
            style={{ fontFamily: 'Montserrat_400Regular', margin: 4 }}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => setTime(text)}
          />

          <Label
            style={{
              fontFamily: 'Montserrat_600SemiBold',
              margin: 4,
            }}
          >
            Projetos que participou
          </Label>

          <Input
            defaultValue={item.project}
            value={project}
            style={{ fontFamily: 'Montserrat_400Regular', margin: 4 }}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => setProject(text)}
          />

          <Label
            style={{
              fontFamily: 'Montserrat_600SemiBold',
              margin: 4,
            }}
          >
            URL da foto do naver
          </Label>

          <Input
            defaultValue={item.url}
            value={url}
            style={{ fontFamily: 'Montserrat_400Regular', margin: 4 }}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => setUrl(text)}
          />

          <Button style={{ top: 10 }} onPress={editNaver}>
            <Label
              style={{
                fontFamily: 'Montserrat_500Medium',
                color: colors.white,
              }}
            >
              Salvar
            </Label>
          </Button>
        </Info>
      </ScrollView>
    </Container>
  );
}
