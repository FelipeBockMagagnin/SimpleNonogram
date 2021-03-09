import React from "react";
import { DefaultDimensions, SquareValue, DimensionsChoices } from "./constants.js";
import styles from "./styles.js";
import { Picker, View, Text, Button, TouchableOpacity } from 'react-native'
import CustomModal from '../../components/CustomModal'
import { StyleSheet, Dimensions } from 'react-native'


import { Feather } from '@expo/vector-icons';


/**
 * A basic class containing the structure that makes up the hint
 * number values.
 */
class Hints {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
  }
}

/**
 * Produces a dropdown selection box for user to select the dimensions
 * of the game board when it's reset next.
 * 
 * These choices are pulled from ../common/constants.js.
 */
function DimensionChoices() {
  let choices = [];

  for (let i = 0; i < DimensionsChoices.length; i++) {
    choices.push(<Picker.Item label={DimensionsChoices[i][0] + "x" + DimensionsChoices[i][1]}></Picker.Item>)
  }

  return (
    <Picker>
      {choices}
    </Picker>
  )
}

/**
 * Translates either row or column hint numbers into HTML View elements.
 * 
 * The current hint numbers according to the current state of the board
 * are compared to the static goal hint numbers in order to "cross out"
 * some numbers in order to assist the user in figuring out what sequences
 * they've already finished.
 * 
 * Crossed out hint numbers appear as a different color than normal hint numbers,
 * and are thus given a different View className than normal hint numbers.
 * 
 * @param {*} props 
 */
function HintNumbers(props) {
  let hintNumbers = [];

  const fontSize = 120 / (props.dimensions);
  const gameWidth = Dimensions.get('window').width - 80;


  for (let a = 0; a < props.goalHints.length; a++) {
    let aSection = [];
    let currentIt = 0;

    for (let b = 0; b < props.goalHints[a].length; b++) {
      if (typeof props.currentHints[a][currentIt] !== 'undefined' &&
        props.currentHints[a][currentIt] === props.goalHints[a][b]) {
        currentIt++;
        aSection.push(<Text style={[styles.hint, styles.crossout, { fontSize: fontSize }]}>{props.goalHints[a][b] + ' '}</Text>);
      } else {
        aSection.push(<Text style={[styles.hint, { fontSize: fontSize }]}>{props.goalHints[a][b] + ' '}</Text>);
      }
    }

    hintNumbers.push(<Text style={props.type == 'col' ? [styles.colHints, { width: fontSize + 1 }] : [styles.rowHint, { height: fontSize + 1 }]}>{aSection}</Text>);
  }

  return (

    <View style={props.area == 'left' ? [styles.leftHintContainer, { height: gameWidth }] : [styles.topHintContainer, { width: gameWidth }]}>
      {hintNumbers}
    </View>
  );
}

/**
 * Translates inViewidual board squares into HTML View elements.
 * 
 * @param {*} props 
 */
function Square(props) {
  const index = (typeof props.value === 'undefined') ? 1 : props.value;
  const value = SquareValue.properties[index].name;

  const gameWidth = Dimensions.get('window').width - 80;
  const squareHeight = ((gameWidth - 1) / props.dimensions.rows) - 2;

  if(value == 'filled'){
    return (
      <View
        style={[styles.square, styles.squareFilled, { width: squareHeight, height: squareHeight }]}
        //className={'square square-' + value}
        onTouchStart={props.onTouchStart}
        onTouchMove={props.onTouchMove}
      >
        <Text className="material-icons"></Text>
      </View>
    );
  } else if(value == 'marked'){
    return (
      <View
        style={[styles.square, styles.squareMarked, { width: squareHeight, height: squareHeight }]}
        //className={'square square-' + value}
        onTouchStart={props.onTouchStart}
        onTouchMove={props.onTouchMove}
      >
        <Text className="material-icons"></Text>
      </View>
    );
  } 

  return (
    <View
      style={[styles.square, styles.squareEmpty, { width: squareHeight, height: squareHeight }]}
      //className={'square square-' + value}
      onTouchStart={props.onTouchStart}
      onTouchMove={props.onTouchMove}
    >
      <Text className="material-icons"></Text>
    </View>
  );

  
}

/**
 * A game board made up of squares.
 */
class Board extends React.Component {
  renderSquare(loc) {
    return (
      <Square
        value={this.props.squares[loc]}
        dimensions={this.props.dimensions}
        onTouchStart={(event) => this.props.onTouchStart(event, loc)}
        onTouchMove={() => this.props.onTouchMove(loc)}
      />
    );
  }

  render() {
    const cols = [];
    let loc = 0

    for (let col = 0; col < this.props.dimensions.rows; col++) {
      let temp = [];
      for (let row = 0; row < this.props.dimensions.cols; row++) {
        temp.push(this.renderSquare(loc++));
      }
      cols.push(temp);
    }

    const rows = [];
    for (let row = 0; row < this.props.dimensions.rows; row++) {
      rows.push(
        <View
          style={styles.boardRow}
        //className="board-row"
        >
          {cols[row]}
        </View>
      );
    }

    const gameWidth = Dimensions.get('window').width - 80;

    return (
      <View
        style={[styles.gameBoard, { width: gameWidth, height: gameWidth }]}
      //className="game-board"
      >
        {rows}

        {
          this.props.dimensions.rows == 10 ?
            (
              <View style={{ position: 'absolute', width: gameWidth, height: gameWidth }}>
                <View style={{ position: 'absolute', left: 0, bottom: gameWidth / 2, width: gameWidth, backgroundColor: '#333', height: 1 }}></View>
                <View style={{ position: 'absolute', left: gameWidth / 2, bottom: 0, height: gameWidth, backgroundColor: '#333', width: 1 }}></View>
              </View>
            )
            : null
        }

        {
          this.props.dimensions.rows == 15 ?
            (
              <View style={{ position: 'absolute', width: gameWidth, height: gameWidth }}>
                <View style={{ position: 'absolute', left: gameWidth / 3, bottom: 0, height: gameWidth, backgroundColor: '#333', width: 1 }}></View>
                <View style={{ position: 'absolute', left: 0, bottom: gameWidth / 3, height: 1, backgroundColor: '#333', width: gameWidth }}></View>
                <View style={{ position: 'absolute', right: gameWidth / 3, top: 0, height: gameWidth, backgroundColor: '#333', width: 1 }}></View>
                <View style={{ position: 'absolute', right: 0, top: gameWidth / 3, height: 1, backgroundColor: '#333', width: gameWidth }}></View>
              </View>
            )
            : null
        }


      </View>
    );
  }
}

/**
 * The main component that is called on by ReactDOM.render().
 */
class Game extends React.Component {
  constructor(props) {
    super(props);

    styles.gamed
    let rows = this.props.route.params.rows;
    let columns = this.props.route.params.columns;

    const nextDimensions = {
      rows: rows,
      cols: columns
    }

    const size = nextDimensions.rows * nextDimensions.cols;

    this.state = {
      /** Number of rows and columns in game board. */
      dimensions: {
        rows: nextDimensions.rows,
        cols: nextDimensions.cols,
      },
      /** Current board state. */
      current: Array(size).fill(SquareValue.EMPTY),
      /** History of board states. Initial board state will always be empty. */
      history: [{
        squares: Array(size).fill(SquareValue.EMPTY),
      }],
      /** Index of history that we're currently at. */
      stepNumber: 0,
      /** Current hint numbers. */
      currentHints: new Hints(Array(nextDimensions.rows).fill([0]), Array(nextDimensions.cols).fill([0])),
      /** Goal hint numbers. */
      goalHints: new Hints([], []),
      /** Whether or not the left mouse button is currently held down. */
      lMouseDown: false,
      /** Whether or not the right mouse button is currently held down. */
      rMouseDown: false,
      /** Value of first square clicked. Reset when mouse button is let go. */
      initialSquare: SquareValue.EMPTY,
      /** Value we're currently changing squares to. Reset when mouse button is let go. */
      currentAction: SquareValue.EMPTY,
      /** Whether or not the board's current state has been changed since the last time we appended to history. */
      changed: false,
      /** The number of seconds that have elapsed since board initialization. */
      seconds: 0,
      /** A string timer keeping track of hours:minutes:seconds elapsed since board initialization. */
      timer: "00:00:00",
      InputType: 0
    };
  }

  /**
   * Initially called by componentDidMount().
   * 
   * Will be called once every 1,000 milliseconds (1 second)
   * in order to update the in-game clock.
   */
  tick() {
    if (this.winCheck()) {
      return;
    }

    this.setState(state => ({
      seconds: state.seconds + 1,
      timer: new Date(1000 * (this.state.seconds + 1)).toISOString().substr(11, 8)
    }));
  }

  /**
   * Called once on initial load.
   */
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
    this.generateWinState();
  }

  /**
   * Called when component is updated.
   */
  componentDidUpdate(prevProps, prevState) {
    if (!this.state.goalHints.rows.length) {
      this.generateWinState();
    }
  }

  /**
   * Produces a randomly generated win state for the game board.
   * 
   * The hint numbers are what determine the win state rather than
   * the actual board state because we're not necessarily generating
   * win states with only one solution.
   */
  generateWinState() {
    const size = this.state.dimensions.rows * this.state.dimensions.cols;
    let winSquares = [];

    for (let i = 0; i < size; i++) {
      winSquares.push((Math.random() < 0.35) ? SquareValue.EMPTY : SquareValue.FILLED);
    }

    this.setState({
      goalHints: this.getHintNumbers(winSquares),
    });
  }

  /**
   * Compares current hint numbers to goal hint numbers to see
   * if they match. If they match, the player has won.
   * 
   * @returns {Boolean} Whether or not the player has won.
   */
  winCheck() {
    if (!this.state.currentHints.rows.length) return false;

    // Compare row hint numbers.
    for (let a = 0; a < this.state.goalHints.rows.length; a++) {
      if (this.state.goalHints.rows[a].length !== this.state.currentHints.rows[a].length) return false;
      for (let b = 0; b < this.state.goalHints.rows[a].length; b++) {
        if (this.state.goalHints.rows[a][b] !== this.state.currentHints.rows[a][b]) return false;
      }
    }

    // Compare column hint numbers.
    for (let a = 0; a < this.state.goalHints.cols.length; a++) {
      if (this.state.goalHints.cols[a].length !== this.state.currentHints.cols[a].length) return false;
      for (let b = 0; b < this.state.goalHints.cols[a].length; b++) {
        if (this.state.goalHints.cols[a][b] !== this.state.currentHints.cols[a][b]) return false;
      }
    }



    return true;
  }

  /**
   * Retrieve square index in 1-D array using the
   * [row][column] indices one would expect from a 2-D array.
   * 
   * @param {Number} row Row that square is located.
   * @param {Number} col Column that square is located.
   */
  getSquareIndex(row, col) {
    return col + (this.state.dimensions.cols * row);
  }

  /**
   * Append current board state to history of board states.
   * 
   * Should be called whenever we finish changing square values.
   * 
   * At the moment, this is called whenever we let go of a mouse button.
   * This means we can capture multiple square value changes in a single
   * append as long as the mouse button is held down and the cursor is
   * dragged over multiple squares.
   */
  appendHistory() {
    if (!this.state.changed) return;

    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = this.state.current;

    if (current !== history[history.length - 1].squares) {
      this.setState({
        history: history.concat([
          {
            squares: current,
          }
        ]),
        stepNumber: history.length,
        changed: false,
      });
    }

    this.setState({
      currentHints: this.getHintNumbers(this.state.current),
      lMouseDown: false,
      rMouseDown: false,
      initialSquare: SquareValue.EMPTY,
      currentAction: SquareValue.EMPTY,
    });
  }

  /**
   * Deal with square click interaction.
   * 
   * Should be called when user mouse cursor is hovering over
   * a square on the game board and a mouse button is pressed down.
   * 
   * Will alter the value of that square, and initiate the process
   * of potentially holding the mouse button down and dragging over
   * other squares in order to also alter their values.
   * 
   * @param {MouseEvent} event Mouse event for determining which mouse button was pressed.
   * @param {Number} loc Index of the square being clicked.
   */
  squareClick(event, loc) {
    const current = this.state.current;
    const squares = current.slice();
    let lMouseDown = this.state.lMouseDown;
    let rMouseDown = this.state.rMouseDown;
    let initialSquare = squares[loc];
    let currentAction = this.state.currentAction;
    let changed = this.state.changed;

    if (this.state.InputType === 0) {
      lMouseDown = true;
      currentAction = (initialSquare === SquareValue.EMPTY) ? SquareValue.FILLED : SquareValue.EMPTY;
      squares[loc] = currentAction;
      changed = true;
    } 
    else if (this.state.InputType === 1) {
      rMouseDown = true;
      currentAction = (initialSquare === SquareValue.EMPTY) ? SquareValue.MARKED : SquareValue.EMPTY;
      squares[loc] = currentAction;
      changed = true;
    } else {
      return;
    }


    this.setState({
      current: squares,
      lMouseDown: lMouseDown,
      rMouseDown: rMouseDown,
      initialSquare: initialSquare,
      currentAction: currentAction,
      changed: changed,
    });
  }

  /**
   * Deal with square hover interaction.
   * 
   * Should be called when user mouse cursor is hovering over
   * a square on the game board.
   * 
   * Will check if a mouse button is being held down,
   * and if one is, the square's value may be altered.
   * 
   * @param {Number} loc Index of the square being hovered over.
   */
  squareHover(loc) {
    let lMouseDown = this.state.lMouseDown;
    let rMouseDown = this.state.rMouseDown;
    let changed = this.state.changed;

    if (!lMouseDown && !rMouseDown) return;

    const current = this.state.current;
    const squares = current.slice();
    let initialSquare = this.state.initialSquare;
    let currentAction = this.state.currentAction;

    if (initialSquare === squares[loc]) {
      squares[loc] = currentAction;
      changed = true;
    } else {
      return;
    }

    this.setState({
      current: squares,
      changed: changed,
    });
  }

  /**
   * Retrieve row and column hint numbers and return them.
   * 
   * @return {Hints} Return Hints object containing two arrays (rows[], cols[]).
   */
  getHintNumbers(squares) {
    const dimensions = this.state.dimensions;
    const hintNumbers = new Hints([], []);

    // Find row hint numbers.
    for (let row = 0; row < dimensions.rows; row++) {
      let rowHints = [];
      let num = 0;

      for (let col = 0; col < dimensions.cols; col++) {
        if (squares[this.getSquareIndex(row, col)] === SquareValue.FILLED) num++;
        else if (num) {
          rowHints.push(num);
          num = 0;
        }
      }
      if (num || !rowHints.length) rowHints.push(num);
      hintNumbers.rows.push(rowHints);
    }

    // Find column hint numbers.
    for (let col = 0; col < dimensions.cols; col++) {
      let colHints = [];
      let num = 0;

      for (let row = 0; row < dimensions.rows; row++) {
        if (squares[this.getSquareIndex(row, col)] === SquareValue.FILLED) num++;
        else if (num) {
          colHints.push(num);
          num = 0;
        }
      }
      if (num || !colHints.length) colHints.push(num);
      hintNumbers.cols.push(colHints);
    }

    return hintNumbers;
  }

  /**
   * Jump to a particular point in the history of actions.
   * If the step doesn't exist in the history as an index, do nothing.
   * 
   * @param {Number} step The index of the action state to jump to.
   */
  jumpTo(step) {
    if (step < 0 || step >= this.state.history.length) return;

    this.setState({
      current: this.state.history[step].squares,
      stepNumber: step,
    });
  }

  /**
   * Undo the most recent action.
   * If there is no action to undo, do nothing.
   * 
   * As soon as we commit a new action, we cut off any actions
   * in front of the current action in the action history.
   */
  undoAction() {
    const stepNumber = this.state.stepNumber;

    if (!stepNumber) return;

    this.setState({
      current: this.state.history[stepNumber - 1].squares,
      stepNumber: stepNumber - 1,
    });
  }

  /**
   * Redo an undo.
   * If any actions have been undone by the undoAction()
   * function, we can redo them with this function.
   * 
   * As soon as we commit a new action, we cut off any actions
   * in front of the current action in the action history.
   */
  redoAction() {
    const stepNumber = this.state.stepNumber;

    if (stepNumber === this.state.history.length - 1) return;

    this.setState({
      current: this.state.history[stepNumber + 1].squares,
      stepNumber: stepNumber + 1,
    });
  }

  /**
   * Restart with a new game board.
   */
  restart() {
    let rows = this.props.route.params.rows;
    let columns = this.props.route.params.columns;

    const nextDimensions = {
      rows: rows,
      cols: columns
    }

    const size = nextDimensions.rows * nextDimensions.cols;

    this.setState({
      dimensions: nextDimensions,
      current: Array(size).fill(SquareValue.EMPTY),
      history: [{
        squares: Array(size).fill(SquareValue.EMPTY),
      }],
      stepNumber: 0,
      currentHints: new Hints(Array(nextDimensions.rows).fill([0]), Array(nextDimensions.cols).fill([0])),
      goalHints: new Hints([], []),
      lMouseDown: false,
      rMouseDown: false,
      initialSquare: SquareValue.EMPTY,
      currentAction: SquareValue.EMPTY,
      changed: false,
      seconds: 0,
      timer: "00:00:00",
      InputType: 0
    });
  }

  render() {
    const current = this.state.current;

    return (
      <View
        style={styles.game}
        //className="game"
        //onContextMenu={(e) => e.preventDefault()}
        onTouchEnd={() => this.appendHistory()}
      >
        <CustomModal
          modalVisible={this.winCheck()}
          redirectPage='Home'
          navigation={this.props.navigation}
          modalText={
            this.state.dimensions.rows + 'x' + this.state.dimensions.cols +
            '\n' + this.state.timer
          }
          confirmText='Continue!'
          title='Amazing'
        />
        <TouchableOpacity
          style={{
            marginRight: 20,
            color: 'white',
            position: 'absolute',
            top: 30,
            left: 10
          }}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Feather name="arrow-left" size={30} color="white" />
        </TouchableOpacity>
        <View style={styles.gameInfo}>
          <Text style={{ color: 'white', fontWeight: '700', fontSize: 20 }}>{this.state.timer}</Text>
          <Text style={{ color: 'white', fontWeight: '700', fontSize: 20 }}>{(this.winCheck()) ? 'You won!' : ''}</Text>
        </View>
        <View className="right-panel">
          <View className="upper-board">
            <HintNumbers
              currentHints={this.state.currentHints.cols}
              goalHints={this.state.goalHints.cols}
              dimensions={this.props.route.params.rows}
              area='upper'
              type='col'
            />
          </View>
          <View style={{ display: 'flex', flexDirection: 'row' }} className="lower-board">
            <HintNumbers
              currentHints={this.state.currentHints.rows}
              goalHints={this.state.goalHints.rows}
              dimensions={this.props.route.params.rows}
              area='left'
              type='row'
            />
            <Board
              squares={current}
              dimensions={this.state.dimensions}
              onTouchStart={(event, loc) => this.squareClick(event, loc)}
              onTouchMove={loc => this.squareHover(loc)}
            />
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 10 }}>
            <TouchableOpacity style={{ margin: 20 }} title='undo' onPress={() => this.undoAction()}>
              <Feather name="corner-up-left" size={40} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={{ margin: 20 }} title='redo' onPress={() => this.redoAction()}>
              <Feather name="corner-up-right" size={40} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={{ margin: 20 }} title='replay' onPress={() => this.restart()}>
              <Feather name="repeat" size={40} color="white" />
            </TouchableOpacity>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity title='undo' 
            onPress={() =>
              { 
                this.setState({
                  InputType: this.state.InputType == 0 ? 1 : 0
                })
              }}>
                {
                  this.state.InputType == 0 
                  ? <Feather name="square" size={40} color="white" />
                  : <Feather name="x" size={40} color="white" /> 
                }              
            </TouchableOpacity>
          </View>

          {/* <View>
          <DimensionChoices />
          </View> */}
          
        </View>
      </View>
    );
  }
}

export default Game;
