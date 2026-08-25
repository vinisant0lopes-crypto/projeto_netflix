import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Banner from './src/banner/index.js'
import Header from './src/header/index.js'
import Search from './src/search/index.js'
import { FlatList } from 'react-native-web';
import Filmes from './data/filmes.js'

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      
      <Header></Header>
      <Search></Search>
      <Banner></Banner>
      
      <View style = {{width:'90%'}}>
        <FlatList 
        horizontal = {true}
        showsVerticalScrollIndicator= {false}
        data={Filmes}
        keyExtractor={(item)=> item.id}
        renderItem={({item}) => (

           <TouchableOpacity style={styles.containerFilmes}>

          <Image style={styles.images} source={{ uri: item.imagem}} />
                  <Text style ={styles.titulo}>{item.nome} </Text>
                 
                  <Text style ={styles.textNota}> {item.nota} </Text>

         </TouchableOpacity>

        )}
        
        
        />
      </View>
      
    </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141a29',
    alignItems: "center",
  },

  containerFilmes:{
        paddingTop:20,
        paddingBottom:16,
        paddingRight:16,
        width:140,
        heigh:28
    },

    titulo:{
        color: '#fff',
        fontSize:12,
        paddingTop:8  
    },

    textNota:{
        fontSize:10,
        color:'#fff',
        paddingLeft:4
    },

    images:{
        width:'100%',
        height:170,
        borderRadius: 8,    
       
    }

});
