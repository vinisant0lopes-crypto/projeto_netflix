import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView,FlatList } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Banner from './src/banner/index.js'
import Header from './src/header/index.js'
import CardMovies from './src/CardMovies/index.js';
import Search from './src/search/index.js'

import Filmes from './data/filmes.js'

export default function App() {
  return (
    
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

           <CardMovies
            titulo={item.nome}
            imagem={item.imagem}
            nota={item.nota}
           />

           
      
        )}
        
        
        />
      </View>
      
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c20000',
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
