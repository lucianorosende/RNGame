import React, {useState} from "react";
import {View, Text, Button, TouchableWithoutFeedback, Keyboard} from "react-native";
import { styles } from "./styles"
import { Card, Input } from "../../components";
import theme from "../../constants/theme";

const StartGame = () => {

    const [enteredValue, setEnteredValue] = useState("");

    const onInputChange = (text) => {
        setEnteredValue(text.replace(/[^0-9]/g, ""));
    }

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
            <Text style={styles.title}>Comenzar Juego</Text>
            <Card style={styles.inputContainer}>
                <Text style={styles.subTitle}>Elija el número</Text>
                    <Input 
                    placeholder="11" 
                    keyboardType="numeric" 
                    style={styles.input}
                    maxLength={2}
                    blurOnSubmit
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={enteredValue}
                    onChangeText={text => onInputChange(text)}
                    />
                <View style={styles.buttonContainer}>
                    <Button title="Limpiar" color={theme.colors.primary} onPress={() => null}></Button>
                    <Button title="Confirmar" color={theme.colors.primary} onPress={() => null}></Button>
                </View>
            </Card>
            
        </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGame;