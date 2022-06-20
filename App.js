import React, {useState} from 'react';
import { useFonts } from 'expo-font';
import { View, SafeAreaView, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { Header } from "./components/index"
import StartGame from "./screens/start-game/index"
import GameScreen from './screens/game-screen';
import theme from './constants/theme';


export default function App() {

  const [userNumber, setUserNumber] = useState();

  const [loaded] = useFonts({
    "KdamThmorPro": require("./assets/fonts/KdamThmorPro-Regular.ttf"),
  });

  if(!loaded){
   return <ActivityIndicator size="large" color={theme.colors.primary} />
  }

  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  let content = userNumber ? ( 
    <GameScreen userOptions={userNumber}/>
    ) : (
    <StartGame onStartGame={onStartGame} />
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

