import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    body: {
      flex: 1,
      alignItems: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Helvetica, sans-serif',
      backgroundColor: '#f2f2f2',
    },
    board: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: 'center',
    },
    title: {
      fontSize: 32,
      fontWeight: '600',
      textAlign: 'center',
      color: '#595959',
    },
    cell: {
      width: (Dimensions.get('window').width - 50) / 3,
      height: (Dimensions.get('window').width - 50) / 3,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      margin: 5,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    cellText: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#404040',
    },
    cellX: {
      backgroundColor: '#ff5050',
    },
    cellO: {
      backgroundColor: '#3399ff',
    },
    winnerMessage: {
      textAlign: 'center',
      fontSize: 2.5,
      margin: 5,
    },
    restartButton: {
      width: 140,
      height: 60,
      borderRadius: 5,
      flexDirection: 'column',
      backgroundColor: '#40bf40',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 5,
      elevation: 5,
      margin: 10,
    },
    textButton: {
      color: 'white',
      fontWeight: 'bold',
    },
    footer: {
      alignItems: 'center',
      justifyContent: 'center',
      textShadowColor: '#000',
    },
    gameOver: {
      opacity: 0.5,
    },
  });

  export default styles;