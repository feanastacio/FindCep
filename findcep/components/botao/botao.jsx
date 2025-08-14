import { Pressable, Text, StyleSheet } from "react-native"

export const Botao = ({tituloBotao, onPress}) => {
    return(
        <Pressable style={styles.botao} onPress={onPress}>
            <Text style={styles.textoBotao}>
                {tituloBotao}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    botao:{
        width: '70%',
        paddingVertical: 10,
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: '#00AAEE'
    },
    textoBotao: {
        fontSize: 16,
        color: '#FFFFFF'
    }
})