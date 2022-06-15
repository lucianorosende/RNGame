import React, { useState } from "react";
import {View,Button} from "react-native";
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

const GameScreen = ({ userOptions }) => {

    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, userOptions));

    return(
        <View style={styles.container}>
            <CustomText>La suposicion del oponente</CustomText>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="Menor" onPress={() => null} color={theme.colors.secondary}></Button>
                <Button title="Mayor" onPress={() => null} color={theme.colors.secondary}></Button>
            </Card>
            
        </View>
    );
};

export default GameScreen;