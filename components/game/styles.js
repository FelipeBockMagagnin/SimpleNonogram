import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  square: {
    position: 'relative',
    display: 'flex',
    color: '#f44336',
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
  backgroundColor: '#ccc',
  borderRadius: 10,
  padding: 3,
  width: 250,
  height: 250
},
hint: {
  display: 'flex',
  alignItems: 'center',
  fontWeight: '700',
  fontSize: 16,
  color: '#000',
  //transition: color 0.2s ease 0s,
}
})

export default styles;


// ol,
// ul {
//   padding-left: 30px,
// }

// .upper-hints {
//   display: grid,
//   align-self: flex-end,
//   align-items: flex-end,
//   -webkit-box-pack: end,
//   justify-content: end,
//   grid-auto-flow: column,
//   margin-bottom: 20px,
// }

// .hint-col {
//   display: grid,
//   justify-items: center,
//   width: 77px,
//   grid-gap: 20px,
// }



// .crossout {
//   color: #666,
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

// .square-empty {
//   background-color: #fff,
// }

// .square-marked {
//   background-color: #ccc,
//   color: #f44336,
// }

// .square-marked .material-icons {
//   font-size: 70px,
//   transform: scale(1),
//   transition: transform 0.2s ease 0s,
// }

// .square-filled {
//   background-color: #353235,
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

// .game {
//   background-color: #282c34,
//   min-height: 100vh,
//   display: flex,
//   flex-direction: row,
//   align-items: center,
//   justify-content: center,
//   color: white,
//   -webkit-touch-callout: none,
//   -webkit-user-select: none,
//   -khtml-user-select: none,
//   -moz-user-select: none,
//   -ms-user-select: none,
//   user-select: none,
//   cursor: default,
// }

// .game-info {
//   margin-right: 20px,
// }