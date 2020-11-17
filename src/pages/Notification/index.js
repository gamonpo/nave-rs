import React, { useState, useEffect } from 'react'
import { Modal } from 'react-native'
import { Button } from '../../components/SmallButton/styles'
import { Label } from '../../components/Form/styles'

import { MView, MHeader, BView } from './styles'

import colors from '../../style/colors'

export default function Notification ({ value }) {
  const [modalVisible, setModalVisible] = useState(value)

  // console.log('PIPOCOLOKO')
  // console.log(modalVisible)
  // console.log(value)

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <MView>
        <MHeader>
          <Label style={{ fontSize: 22, fontFamily: 'Montserrat_600SemiBold' }}>
            Excluir naver
          </Label>

          <Label style={{ fontSize: 16, top: 30 }}>
            Tem certeza que deseja excluir este naver?
          </Label>
        </MHeader>

        <BView>
          <Button
            style={{
              backgroundColor: colors.white,
              borderWidth: 1,
              right: 40,
              width: 130
            }}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Label style={{ fontFamily: 'Montserrat_500Medium' }}>
              Cancelar
            </Label>
          </Button>

          <Button
            style={{ width: 130 }}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Label
              style={{
                color: colors.white,
                fontFamily: 'Montserrat_500Medium'
              }}
            >
              Excluir
            </Label>
          </Button>
        </BView>
      </MView>
    </Modal>
  )
}
