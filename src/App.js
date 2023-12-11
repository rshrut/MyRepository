import React, { useContext, useState } from 'react';
import './App.css';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';

import { QuizContext } from './Helpers/Context';

function App() {
  const[gameState,setGameState]=useState("menu");
  const [score,setScore]=useState(0);

  return (
    <div className="App">
     <h1>QUIZ APP</h1> 
     <QuizContext.Provider value={{gameState,setGameState,score,setScore}}>
     {gameState==="menu" && <MainMenu/>}
     {gameState==="quiz" && <Quiz/>}
     {gameState==="endscreen" && <EndScreen/>}
     </QuizContext.Provider>
    </div>
  );
}

export default App;
