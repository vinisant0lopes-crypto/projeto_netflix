import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Feather from '@expo/vector-icons/Feather'
import styles from './styles.js'


export default function Header(){
    return(

        <View style ={styles.viewHeader}>
      
        <Feather name="menu" size={24} color="white" />   
        <Text style ={styles.textHeader}> TECFILMES </Text>
        <TouchableOpacity>
          
        </TouchableOpacity>

      </View>

    )
}

