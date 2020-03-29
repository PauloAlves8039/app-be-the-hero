/**
 * Arquivo responsável pela exibição da tela de casos.
 * 
*/

import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View, FlatList, Image, Text, TouchableOpacity} from 'react-native'

import logoImg from '../../assets/logo.png'

import styles from './styles'

/**
 * Função responsável pela listagem dos casos.
 *  
*/
export default function Incidents() {  
    
    const navigation = useNavigation()

    /**
     * Função responsável pela navegação da tela de casos para os seus detalhes.  
     * 
    */
    function navigationToDetails() {
        navigation.navigate('Detail')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos</Text>.
                </Text>
            </View>
            <Text style={styles.title}>Bem-vindo(a)!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>
            
            <FlatList
                data={[1, 2, 3, 4 , 5]}
                style={styles.incidentList}
                keyExtractor={incident => String(incident)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG: </Text>
                        <Text style={styles.incidentProperty}>AACD</Text>

                        <Text style={styles.incidentProperty}>CASO: </Text>
                        <Text style={styles.incidentProperty}>Locomoção de criança</Text>

                        <Text style={styles.incidentProperty}>VALOR: </Text>
                        <Text style={styles.incidentProperty}>R$ 120,00</Text>

                        <TouchableOpacity 
                            style={styles.detailsButton} 
                            onPress={navigationToDetails}
                        >
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02041" />                    
                        </TouchableOpacity>
                </View>
                )} 
            />

        </View>
    )
}