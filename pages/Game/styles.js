import { StyleSheet, Dimensions } from 'react-native'


const gameDimension = 5;
const leftHintsWidth = 60;

const gameWidth = Dimensions.get('window').width - leftHintsWidth - 20;
const gameHeight = gameWidth;

console.log(gameWidth);

const squareHeight = (gameWidth / gameDimension) - gameDimension * 1.1;
const squareWidth = squareHeight;


const styles = StyleSheet.create({
  square: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    margin: 2,
    height: squareHeight,
    width: squareWidth, 
  },
  boardRow: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  gameBoard: {
  //display: grid,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#ccc',
  borderRadius: 10,
  padding: 3,
  width: gameWidth,
  height: gameHeight
},
hint: {
  color: 'white',
  marginVertical: 5,
},
rowHint: {
  color: 'white',
  fontSize: 16,
  fontWeight: '700',
  margin: 4,
  marginVertical: 20,
},
colHints: {
  color: 'white',
  fontSize: 16,
  fontWeight: '700',
  margin: 4,
  marginHorizontal: 20,
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap'
},
crossout: {
  color: '#666',
  margin: 5,
},
leftHintContainer: {
  width: leftHintsWidth,
  height: gameHeight,
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  alignItems: 'flex-end',
  justifyContent: 'center',
},
topHintContainer: {
  display: 'flex',
  marginLeft: leftHintsWidth,
  width: gameWidth,
  flexDirection: 'row',
  alignItems: 'stretch',
  alignSelf: 'center',
  justifyContent: 'center',
},
game: {
  backgroundColor: '#282c34',
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  //-webkit-touch-callout: none,
  //-webkit-user-select: none,
  //-khtml-user-select: none,
  //-moz-user-select: none,
  //-ms-user-select: none,
  //user-select: none,
  //cursor: default,
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
  backgroundColor: '#ccc',
  color: '#f44336',
},

})

export default styles;


// ol,
// ul {
//   padding-left: 30px,
// }

// .hint-col {
//   display: grid,
//   justify-items: center,
//   width: 77px,
//   grid-gap: 20px,
// }





// .lower-board {
//   display: flex,
// }

// .left-hints {
//   display: grid,
//   justify-items: end,
//   margin-right: 20px,
// }

// .hint-row {
//   display: grid,
//   grid-gap: 20px,
//   grid-auto-flow: column,
// }





// .status {
//   margin-bottom: 10px,
// }


// .square .material-icons {
//   transform: scale(0),
//   transition: transform 0.2s ease 0s,
// }

// .square::after {
//   transform: scale(0),
// }



// .square-marked .material-icons {
//   font-size: 70px,
//   transform: scale(1),
//   transition: transform 0.2s ease 0s,
// }

// @keyframes blink {
//   from  { box-shadow: 0 0 0 8px #1a7acd,}
//   to    { box-shadow: 0 0 0 8px #40ffdd,}
// }

// .square-empty:hover, .square-filled:hover {
//   animation-name: blink,
//   animation-duration: 0.5s,
//   animation-iteration-count: infinite,
//   animation-direction: alternate,
//   z-index: 1,
//   cursor: pointer,
// }

// .kbd-navigation .square:focus {
//   background: #ddd,
// }