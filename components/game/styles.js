import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  square: {
    position: 'relative',
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center',
    borderWidth: 3,
    borderRadius: 6,
    margin: 3,
    //float: left,
    height: 42, //70
    width: 42, //70
    //cursor: pointer,
    //transition: border 0.2s ease 0s, background-color 0.2s ease 0s,
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
  width: 250,
  height: 250
},

hint: {
  margin: 4
  //transition: color 0.2s ease 0s,
},
rowHint: {
  color: 'white',
  fontSize: 16,
  fontWeight: '700',
  margin: 4
  //-webkit-box-pack: end,
  //grid-auto-flow: column,
},
colHints: {
  color: 'blue',
  fontSize: 16,
  fontWeight: '700',
  margin: 4
  //-webkit-box-pack: end,
  //grid-auto-flow: column,
},
crossout: {
  color: '#666'
},
leftHintContainer: {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  alignSelf: 'flex-end',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  marginBottom: 20,
},
rigthHintContainer: {
  flexDirection: 'column',
  alignItems: 'center',
  display: 'flex',
  alignSelf: 'flex-start',
  alignItems: 'flex-start',
  marginBottom: 20,
},
game: {
  backgroundColor: '#282c34',
  height: Dimensions.get('window').height, //'100vh',
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
  top: 20,
  left: 20
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