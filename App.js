import React, {useState} from 'react';
import { View, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { Header } from "./components/index"
import StartGame from "./screens/start-game/index"
import GameScreen from './screens/game-screen';

export default function App() {

  const [userNumber, setUserNumber] = useState();

  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  let content = userNumber ? ( 
    <GameScreen userOptions={userNumber} />
    ) : (
    <StartGame onStartGame={onStartGame} />
    );
    


  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Header title={"Adivina el número"}/>
      {content} 
    </View>
    </SafeAreaView>
  );
}

