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
        data={Filmes}
        keyExtractor={(item)=> item.id}
        renderItem={({item}) => (

          <TouchableOpacity>
            <Image styles ={{width:80, height:100}} source = {{uri: item.imagem }}></Image>
          <Text> {item.nome} </Text>

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
    backgroundColor: '#cd0c0c',
    alignItems: 'center',
  },

 viewHeader:{
  flexDirection: 'row',
  width:'90%',
  alignItems:'center',
  marginTop: 10,
  justifyContent:'space-between',
 },

 textHeader: {
  fontSize: 25,
  color:'white',
  fontWeight:'bold'
 },

 containerSearch:{
  marginTop:20,
  width:'90%',
  backgroundColor:'white',
  borderRadius:5,
  padding:8,
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center'
 },

 inputSearch:{
  height:40,
  padding:8,
  width:'100%'
 },

 imageBanner:{
  width: 300,
  height:400,
  marginTop:15,
  borderRadius:10,
 },

 textBanner:{
  color:'white',
  width:'90%',
  fontSize:30,
  marginTop:20,
  fontWeight:'bold'
 }

});
