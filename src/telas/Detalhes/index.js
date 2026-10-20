import { useRoute } from "@react-navigation/native";
import { View, Text, Image, ScrollView } from "react-native";
import Stars from "react-native-stars";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles.js";

export default function Detalhes() {
  const route = useRoute();
  const { titulo, nota, imagem, sinopse } = route.params;

  // "7.6" (string, escala 0-10) -> 3.8 (número, escala 0-5)
  const estrelas = (Number(nota) || 0) / 2;

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image style={styles.imagem} source={{ uri: imagem }} />
        <Text style={styles.titulo}>{titulo}</Text>

        <View style={{ flexDirection: "row", alignItems: "center", paddingLeft: 8 }}>
          <Stars
            default={estrelas}
            count={5}
            half={true}
            disabled={true}
            spacing={4}
            fullStar={<FontAwesome name="star" size={24} color="gold" />}
            halfStar={<FontAwesome name="star-half-full" size={24} color="gold" />}
            emptyStar={<FontAwesome name="star-o" size={24} color="gold" />}
          />
          <Text style={[styles.nota, { marginLeft: 8 }]}>{nota}</Text>
        </View>

        <Text style={styles.tituloSinopse}>Sinopse</Text>
        <Text style={styles.textDetalhes}>{sinopse}</Text>
      </ScrollView>
    </View>
  );
}