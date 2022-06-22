import React, { useState, useEffect } from "react";
import { View, Button, Text, Image, Dimensions, ScrollView } from "react-native";
import { Card } from "../../components/index";
import { styles } from "./styles"
import theme from '../../constants/theme';

const GameOverScreen = ({rounds, choice, onRestart}) => {
    const [isPortrait, setIsPortrait] = useState(true);

    const onPortraitChange = () => {
        const dim = Dimensions.get("screen");
        return dim.height >= dim.width;
    }
    const statePortrait = () => {
        setIsPortrait(onPortraitChange);
    }

    useEffect(() => {
        Dimensions.addEventListener("change", statePortrait());
        return () => {
            Dimensions.removeEventListener("change", statePortrait());
        }
    });

    return(
        <ScrollView style={styles.genericContainer}>
        <View style={isPortrait ? styles.container : styles.containerLandscape}>
            <Image 
            source={{
            uri: "https://www.revistacactus.com/wp-content/uploads/2019/11/game-over.jpg",
          }}
            style={isPortrait ? styles.image : styles.imageLandscape}
            />
            <Card style={isPortrait ? styles.result: styles.resultLandscape}>
                <Text>Tries: {rounds}</Text>
                <Text>The number was: {choice}</Text>
            </Card>
            <Button title="Restart" onPress={onRestart} color={theme.colors.secondary}></Button>
        </View>
        </ScrollView>

    )
}

export default GameOverScreen