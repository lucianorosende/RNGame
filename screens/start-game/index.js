import React, {useState} from "react";
import {View, Text, Button, TouchableWithoutFeedback, Keyboard} from "react-native";
import { styles } from "./styles"
import { Card, Input, NumberContainer } from "../../components";
import theme from "../../constants/theme";

const StartGame = ({onStartGame}) => {

    const [enteredValue, setEnteredValue] = useState("");
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const onInputChange = (text) => {
        setEnteredValue(text.replace(/[^0-9]/g, ""));
    }

    const onHandleReset = () => { 
        setEnteredValue("");
        setConfirmed(false);   
    }

    const onHandleConfirm = () => {
        const chosenNumber = parseInt(enteredValue);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) return;
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue("");
    }

    const confirmedOutput = confirmed ? (
        <Card style={styles.inputContainer}>
            <Text>Has seleccionado</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button title="Empezar Juego" onPress={() => onStartGame(selectedNumber)} color={theme.colors.primary}></Button>
        </Card>
    ) : null

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
                    <Button title="Limpiar" color={theme.colors.secondary} onPress={() => onHandleReset()}></Button>
                    <Button title="Confirmar" color={theme.colors.secondary} onPress={() => onHandleConfirm()}></Button>
                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGame;