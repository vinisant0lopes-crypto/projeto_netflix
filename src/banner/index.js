import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Feather from '@expo/vector-icons/Feather'
import styles from './styles.js'


export default function Banner(){
    return(

        <> 
         <Text style = {styles.textBanner}> Em cartaz </Text>

        <Image
            source ={require("../../assets/godzilla_movie.png")}
            style = {styles.imageBanner}
        ></Image>
        
        </>

    )
}
