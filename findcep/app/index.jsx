// import { ImageBackground } from "expo-image";
import { Text, View, StyleSheet,ImageBackground, Image, ScrollView } from "react-native";
import { Input } from '../components/input/input';
import { Botao } from '../components/botao/botao';
import { Card } from '../components/card/card';

export default function Index() {
  return (
    <>
    {/* 1- Logo + imagem do fundo */}
    <ImageBackground source={require('../assets/images/image3.png')}
    style={styles.imgFundo}>
      <Image source={require('../assets/images/Logo.png')} style={styles.logo}></Image>
    </ImageBackground>
    {/* 2- Campo de consulta */}
    <ScrollView style={styles.containerScroll}>
      <View style={styles.container}>
        {/* 2.1- Titulo */}
        <Text style={styles.titulo}>Consulte seu CEP</Text>
        {/* 2.2- Input */}
        <Input/>
        {/* 2.3- Botao */}
        <Botao tituloBotao="Consultar"/>
        {/* 2.4- Card de informacoes */}
        <Card/>
      </View>
    </ScrollView>
    </>   
  );
}
//Estilos dos meus componentes:
const styles = StyleSheet.create({
  imgFundo:{
    flex: 1, 
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  logo: {
    width:100,
    height:120
  },
  container: {
    gap: 40,
    width: "100%",
    minHeight:"100%",
    alignItems:"center"
  },
  containerScroll:{
    flex: 1.5,
    height:'100%',
    paddingTop: 50,
    paddingBottom: 200,
  },
  titulo: {
    fontSize: 22,
    color: '#000000',
    fontFamily: 'Poppins-Bold'
  }
})