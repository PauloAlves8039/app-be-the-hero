/**
 * Arquivo responsável pela exibição da tela de casos.
 * 
*/

import React, { useState, useEffect } from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View, FlatList, Image, Text, TouchableOpacity} from 'react-native'

import api from '../../services/api'

import logoImg from '../../assets/logo.png'

import styles from './styles'

/**
 * Função responsável pela listagem dos casos.
 *  
*/
export default function Incidents() {  
    
    const [incidents, setIncidents] = useState([])
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    const navigation = useNavigation()

    /**
     * Função responsável pela navegação da tela de casos para os seus detalhes.
     * 
     * @param {*} incident parâmetro para envio de informações do caso na tela de detalhes.
     */
    function navigationToDetails(incident) {
        navigation.navigate('Detail', { incident })
    }

    /**
     * Função responsável pelo carregamento dos casos.
     * 
     */
    async function loadIncidents(){
        
        if(loading){
            return
        }

        if(total > 0 && incidents.length !== total){
            return
        }

        setLoading(true)
        
        const response = await api.get('incidents', {
            params: { page }
        })

        setIncidents([...incidents, ...response.data])
        setTotal(response.headers['x-total-count'])
        setPage(Page + 1)
        setLoading(false)   
    }

    useEffect(() => {
        loadIncidents()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
                </Text>
            </View>
            <Text style={styles.title}>Bem-vindo(a)!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>
            
            <FlatList
                data={incidents}
                style={styles.incidentList}
                keyExtractor={incident => String(incident.id)}
                // showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({ item: incident }) => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG: </Text>
                        <Text style={styles.incidentProperty}>{incident.name}</Text>

                        <Text style={styles.incidentProperty}>CASO: </Text>
                        <Text style={styles.incidentProperty}>{incident.title}</Text>

                        <Text style={styles.incidentProperty}>VALOR: </Text>
                        <Text style={styles.incidentProperty}>
                            {Intl.NumberFormat('pt-BR', { 
                                style:'currency', 
                                currency:'BRL' 
                            }).format(incident.value)}
                        </Text>

                        <TouchableOpacity 
                            style={styles.detailsButton} 
                            onPress={() => navigationToDetails(incident)}
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