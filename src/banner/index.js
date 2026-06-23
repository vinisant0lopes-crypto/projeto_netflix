import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Feather from '@expo/vector-icons/Feather'
import styles from './styles.js'


export default function Banner(){
    return(

        <View style = {styles.containerSearch}>
            {/* Inicio da barra de pesquisa */}
            <TextInput 
            placeholder='Digite o filme que deseja buscar' style={styles.inputSearch}
            ></TextInput>

            <TouchableOpacity>
            <Feather name="search" size={24} color="black"/>
            </TouchableOpacity>
        </View>

    )
}
