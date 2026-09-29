import { useRoute } from "@react-navigation/native";
import { View, Text, Image } from "react-native";


export default function Detalhes(){

    const route = useRoute();

    return(
        <View>
            <Text>DETALHES PAGES</Text>
            <Text>{route.params.titulo}</Text>
            <Text>{route.params.nota}</Text>
            <Image style={{width: 350, height: 400}} source={route.params.imagem}></Image>
        </View>
    )
}