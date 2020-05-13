import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

function App() {
  const emptyBoard = Array(9).fill('');
  const [board, setBoard] = useState(emptyBoard);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  function handleWithClick(index) {
    if (winner) {
      console.log('Jogo Finalizado!')
      return;
    }

    if (board[index] !== '') {
      console.log('Posicao Ocupada!')
      return;
    }

    setBoard(
      board.map((item, itemIndex) => (
        item = index === itemIndex ? currentPlayer : item
      ))
    );

    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  }

  function checkWinner() {
    const possibleWaysToWin = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],

      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],

      [board[6], board[4], board[2]],
      [board[0], board[4], board[8]]
    ]

    possibleWaysToWin.forEach(cells => {
      if (cells.every(cell => cell === 'X')) setWinner('X');
      if (cells.every(cell => cell === 'O')) setWinner('O');
    })

    if (board.every(cell => cell !== '')) {
      setWinner('E')
    }
  }

  function restartGame() {
    setBoard(emptyBoard)
    setCurrentPlayer('O')
    setWinner(null)
  }

  function getCellStyle(item) {
    switch (item) {
      case 'X':
        return styles.cellX;
      case 'O':
        return styles.cellO;
      default:
        return null;
    }
  }

  useEffect(checkWinner);

  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.title}>Jogo da Velha</Text>
      <View style={[styles.board, winner ? styles.gameOver : null ]}>
        {board.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.cell, getCellStyle(item)]}
            onPress={() => handleWithClick(index)}>
            <Text style={styles.cellText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {winner &&
        <View style={styles.footer}>
          {winner === 'E' ?
            <View style={styles.winnerMessage}>
              <Text>Empate!</Text>
            </View>
            :
            <View style={styles.winnerMessage}>
              <Text>
                O jogador 
                <Text style={{
                  color: (winner === 'O' ? '#3399ff' : '#ff5050'),
                  fontWeight: 'bold'
                }}>
                  {` ${winner} `} 
                </Text>
                venceu!
              </Text>
            </View>
          }
          <TouchableOpacity
            onPress={restartGame}
            style={styles.restartButton}>
            <Icon name="refresh" size={18} color="white" />
            <Text style={styles.textButton}>Recomecar Jogo</Text>
          </TouchableOpacity>
        </View>
      }
    </SafeAreaView>
  );
}

export default App;
