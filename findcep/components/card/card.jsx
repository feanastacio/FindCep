import { View, StyleSheet, Text, ScrollView } from "react-native"

export const Card = () => {
    return(
        <View style={styles.card} showsVerticalScrollIndicator={false}>
            <View>
                <Text style={styles.tituloValor}>CEP:</Text>
                <Text style={styles.valor}>Dado 01</Text>
            </View>
            <View>
                <Text style={styles.tituloValor}>Logradouro:</Text>
                <Text style={styles.valor}>Dado 02</Text>
            </View>
            <View>
                <Text style={styles.tituloValor}>Bairro:</Text>
                <Text style={styles.valor}>Dado 03</Text>
            </View>
            <View>
                <Text style={styles.tituloValor}>UF:</Text>
                <Text style={styles.valor}>Dado 04</Text>
            </View>
            <View>
                <Text style={styles.tituloValor}>Estado:</Text>
                <Text style={styles.valor}>Dado 05</Text>
            </View>
            <View>
                <Text style={styles.tituloValor}>Regiao:</Text>
                <Text style={styles.valor}>Dado 06</Text>
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