// import { ImageBackground } from "expo-image";
import { Text, View, StyleSheet,ImageBackground, Image, ScrollView } from "react-native";
import { Input } from '../components/input/input';
import { Botao } from '../components/botao/botao';
import { Card } from '../components/card/card';
import { useState } from "react";
import axios from "axios";

export default function Index() {

  const [cep, setCep] = useState("");
  const [jsonCep, setJsonCep] = useState({});

  async function consultarCep(){
    try {
      if (cep !== "" && cep.length === 8) {
        const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        setJsonCep(resposta.data);
        // console.log(jsonCep.data);           
      } else {
        alert("O CEP está incorreto, verifique-o e digite novamente")
      }
    } catch (error) {
      console.log(error)
    }
  }

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
          <Input
            valorCep={cep}
            onChangeValorCep={e => setCep(e)}
            // onChangeValorCep={e => setCep(e), console.log(e);}
          />
          {/* 2.3- Botao */}0
          <Botao 
          tituloBotao="Consultar" 
          onPress={consultarCep}
          />
          {/* 2.4- Card de informacoes */}
          {jsonCep.cep && (<Card
            cep= {jsonCep.cep}
            logradouro={jsonCep.logradouro}
            bairro={jsonCep.bairro}
            uf={jsonCep.uf}
            estado={jsonCep.estado}
            regiao={jsonCep.regiao}
          />)}
          
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