import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  square: {
    borderRadius: 5,
    margin: 1
  },
  boardRow: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
  gameBoard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ccc',
    justifyContent: 'center',
    borderRadius: 5,
    marginRight: 10,
  },
  rowHint: {
    color: 'white',
    fontWeight: '700',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
  },
  colHints: {
    color: 'white',
    fontWeight: '700',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  hint: {
    color: '#fff',
    marginLeft: 4,
  },
  crossout: {
    color: '#666',
  },
  leftHintContainer: {
    width: 60,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
  },
  topHintContainer: {
    marginLeft: 60,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
  },
  game: {
    backgroundColor: '#282c34',
    height: Dimensions.get('window').height +40,
    width: Dimensions.get('window').width,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },
  gameInfo: {
    marginRight: 20,
    color: 'white',
    position: 'absolute',
    top: 30,
    right: 0
  },
  squareFilled: {
    backgroundColor: '#353235',
  },
  squareEmpty: {
    backgroundColor: '#fff',
  },
  squareMarked: {
    backgroundColor: '#f44336',
  },
})

export default styles;