/**
 * Arquivo responsável pela exibição dos detalhes dos casos.
 * 
*/

import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import * as MailComposer from 'expo-mail-composer'

import logoImg from '../../assets/logo.png'

import styles from './styles'

/**
 * Função responsável pela listagem dos detalhes dos casos. 
 * 
*/
export default function Detail() {  
    
    const navigation = useNavigation()
    const message = 'Olá AACD, estou entrando em contato pois gostaria de ajudar no caso "Locomoção de criança" com o valor de R$120,00'

    /**
     * Função para retornar a tela de casos.
     * 
    */
    function mavigateBack(){
        navigation.goBack()
    }

    /**
     * Função para o envio de mensagem dos detalhes do caso por Email.
     * 
    */
    function sendEmail(){
        MailComposer.composeAsync({
            subject: 'Herói do caso: Locomoção de criança',
            recipients: ['pj38alves@gmail.com'],
            body: message,
        })
    }

    /**
     * Função para o envio de mensagem dos detalhes do caso por WhatsApp.
     * 
     */
    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=558196103531&text=${message}`)
    }

    return (
        <View style={styles.styles}>
            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity onPress={mavigateBack}>
                    <Feather name='arrow-left' size={28} color="#E82041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG: </Text>
                <Text style={styles.incidentProperty}>AACD</Text>

                <Text style={styles.incidentProperty}>CASO: </Text>
                <Text style={styles.incidentProperty}>Locomoção de criança
                </Text>

                <Text style={styles.incidentProperty}>VALOR: </Text>
                    <Text style={styles.incidentProperty}>R$ 120,00
                </Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
                <Text style={styles.heroDescription}>Entre em contato</Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendEmail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}