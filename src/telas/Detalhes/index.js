import { useRoute } from "@react-navigation/native";
import { View, Text, Image } from "react-native";
import styles from './styles.js'

export default function Detalhes(){

    const route = useRoute();

    return(
        <View style = {styles.container} >
            <Text style ={styles.textDetalhes}>DETALHES PAGES</Text>
            <Image style={styles.imagem} source={route.params.imagem}></Image>
            <Text style = {styles.textDetalhes}>{route.params.titulo}</Text>
            <Text style = {styles.textDetalhes}>{route.params.nota}</Text>
            <Text style = {styles.textDetalhes}>{route.params.sinopse}</Text>
        </View>
    )
}