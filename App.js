import React, {useState} from 'react';
import { useFonts } from 'expo-font';
import { View, SafeAreaView, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { Header } from "./components/index"
import StartGame from "./screens/start-game/index"
import GameScreen from './screens/game-screen';
import GameOverScreen from './screens/game-over/index';
import theme from './constants/theme';


export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const [loaded] = useFonts({
    "KdamThmorPro": require("./assets/fonts/KdamThmorPro-Regular.ttf"),
  });

  if(!loaded){
   return <ActivityIndicator size="large" color={theme.colors.primary} />
  }

  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0); 
  }

  const HandleGameOver = (rounds) => {
    setGuessRounds(rounds)
  }

  const HandleRestartGame = () => {
    setGuessRounds(0);
    setUserNumber(null); 
  }

  let content = 
    userNumber && guessRounds <= 0 ? ( 
    <GameScreen userOptions={userNumber} onGameOver={HandleGameOver}/>
    ) 
    : guessRounds > 0  ?(
      <GameOverScreen rounds={guessRounds} onRestart={HandleRestartGame} choice={userNumber}/>
    ) 
    : (
    <StartGame onStartGame={onStartGame}/>
    );
    
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Header title={"Guess the number"}/>
      {content} 
    </View>
    </SafeAreaView>
  );
}

