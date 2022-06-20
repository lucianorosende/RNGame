import React, { useState, useRef, useEffect } from "react";
import { View, Button, Alert } from "react-native";
import { Card, CustomText, NumberContainer } from "../../components/index";
import { styles } from "./styles"
import theme from "../../constants/theme";

const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if(rndNum === exclude) {
        return generateRandomNumber(min, max, exclude);
    }
    else{
        return rndNum;
    }
}

const GameScreen = ({ userOptions, onGameOver }) => {

    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, userOptions));

    const [rounds, setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(() => {
        if(currentGuess === userOptions) {
            onGameOver(rounds);
        }

    }, [currentGuess, userOptions, onGameOver])

    const handleNextGuess = (direction) => {
        if(
            (direction === "Lesser" && currentGuess < userOptions) || 
            (direction === "Greater" && currentGuess > userOptions)
        ) {
            Alert.alert("Don't lie!", "You know this is wrong...", [{text: "Sorry!", style: "cancel"}]);
            return null;
        }
        if(direction === "Lesser") {
            currentHigh.current = currentGuess;
        }
        else{
            currentLow.current = currentGuess;
        }

        const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds((actualRounds) => actualRounds + 1);
    }

    return(
        <View style={styles.container}>
            <CustomText>Opponents decision</CustomText>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="Lesser" onPress={() => handleNextGuess("Lesser")} color={theme.colors.secondary}></Button>
                <Button title="Greater" onPress={() => handleNextGuess("Greater")} color={theme.colors.secondary}></Button>
            </Card>
            
        </View>
    );
};

export default GameScreen;