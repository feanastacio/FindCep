import { TextInput, Text, View, StyleSheet } from "react-native"

export const Input = ({valorCep, onChangeValorCep}) => {
    return(
        <View style={styles.campoInput}>
            <Text style={styles.label}>CEP</Text>
            <TextInput
                placeholder="00000-000"
                style={styles.Input}
                maxLength={8}
                value={valorCep}
                onChangeText={onChangeValorCep}
            ></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    campoInput: {
        width: '70%'
    },
    Input: {
        padding: 5,
        color: '#939393',
        borderBottonWidth: 1,
        outlineStyle: 'none',
        borderColor:'#939393',
    }
})