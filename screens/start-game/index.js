import React from "react";
import {View, Text, TextInput, Button} from "react-native";
import { styles } from "./styles"

const StartGame = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Comenzar Juego</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.subTitle}>Elija el número</Text>
                <TextInput placeholder="Ingresa un número" keyboardType="numeric" />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Limpiar" color={"#522A27"} onPress={() => null}></Button>
                <Button title="Confirmar" color={"#522A27"} onPress={() => null}></Button>
            </View>
        </View>
    )
}

export default StartGame;