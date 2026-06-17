import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      

      {/* Inicio da Header */}

      <View style ={styles.viewHeader}>
      
        <Feather name="menu" size={24} color="white" />   
        <Text style ={styles.textHeader}> TECFILMES </Text>
        <TouchableOpacity>
          
        </TouchableOpacity>

      </View>

      {/* Inicio da barra de pesquisa */}

      <View style = {styles.containerSearch}>
      <TextInput 
      placeholder='Digite o filme que deseja buscar' style={styles.inputSearch}
      ></TextInput>

      <TouchableOpacity>
      <Feather name="search" size={24} color="black"/>
      </TouchableOpacity>
      </View>

      {/* Inicio do banner */}
    
    <Text style={styles.textBanner}> Em cartaz </Text>

    <Image source={require('./assets/garfeld.jpg')} style={styles.imageBanner}/>
    <Image source={require('./assets/barbie_videogame.jpg')} style={styles.imageBanner}/>
    <Image source={require('./assets/bolt_filme.jpg')} style={styles.imageBanner}/>
    <Image source={require('./assets/cruella_filme.jpg')} style={styles.imageBanner}/>
    <Image source={require('./assets/f1_filmes.webp')} style={styles.imageBanner}/>
    <Image source={require('./assets/filme_dos_morto.png')} style={styles.imageBanner}/>
    <Image source={require('./assets/gente_grande.jpg')} style={styles.imageBanner}/>
    <Image source={require('./assets/gigante_de_aco.jpg')} style={styles.imageBanner}/>
    <Image source={require('./assets/godzilla_movie.png')} style={styles.imageBanner}/>
    <Image source={require('./assets/godzilla_vs_kong.jpg')} style={styles.imageBanner}/>
    
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
