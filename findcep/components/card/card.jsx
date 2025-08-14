import { View, StyleSheet, Text, ScrollView } from "react-native"

export const Card = ({cep, logradouro, bairro, uf, estado, regiao}) => {
    return(
        <View style={styles.card} showsVerticalScrollIndicator={false}>
            <View>
                <Text style={styles.tituloValor}>CEP:</Text>
                <Text style={styles.valor}>{cep}</Text>
            </View>
            <View>
                <Text style={styles.tituloValor}>Logradouro:</Text>
                <Text style={styles.valor}>{logradouro}</Text>
            </View>
            <View>
                <Text style={styles.tituloValor}>Bairro:</Text>
                <Text style={styles.valor}>{bairro}</Text>
            </View>
            <View>
                <Text style={styles.tituloValor}>UF:</Text>
                <Text style={styles.valor}>{uf}</Text>
            </View>
            <View>
                <Text style={styles.tituloValor}>Estado:</Text>
                <Text style={styles.valor}>{estado}</Text>
            </View>
            <View>
                <Text style={styles.tituloValor}>Regiao:</Text>
                <Text style={styles.valor}>{regiao}</Text>
            </View>       
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        gap: 20,
        padding:'20',
        width: '70%',
        height:'60%',
        borderRadius:7,
        minHeight:'60%',
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 1px 4px',
        // elevation: 2,
        // shadowRadius: 2,
        // shadowOpacity: 0.5,
        // shadowColor: '#b2b2b2ff',
        // backgroundColor: '#232323',
        // shadowOffset: {width: 0, heigh: 2},
    }, 
    tituloValor:{
        fontWeight: 600
    }
})