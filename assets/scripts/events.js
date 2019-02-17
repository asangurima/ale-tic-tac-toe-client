
let currentPlayer = 'x'
// my javascript game board for gamelogic:
let jsBoard = ['', '', '', '', '', '', '', '', '']
// let cellIndexValue = ''

// function to check for winner (after every move?)
const checkForWinner = () => {
  const rowOneWin = (((jsBoard[0] && jsBoard[1] && jsBoard[2]) === 'x') || ((jsBoard[0] && jsBoard[1] && jsBoard[2]) === 'o'))
  const rowTwoWin = (((jsBoard[3] && jsBoard[4] && jsBoard[5]) === 'x') || ((jsBoard[3] && jsBoard[4] && jsBoard[5]) === 'o'))
  const rowThreeWin = (((jsBoard[6] && jsBoard[7] && jsBoard[8]) === 'x') || ((jsBoard[6] && jsBoard[7] && jsBoard[8]) === 'o'))
  const colOneWin = (((jsBoard[0] && jsBoard[3] && jsBoard[6]) === 'x') || ((jsBoard[0] && jsBoard[3] && jsBoard[6]) === 'o'))
  const colTwoWin = (((jsBoard[1] && jsBoard[4] && jsBoard[7]) === 'x') || ((jsBoard[1] && jsBoard[4] && jsBoard[7]) === 'o'))
  const colThreeWin = (((jsBoard[2] && jsBoard[5] && jsBoard[8]) === 'x') || ((jsBoard[2] && jsBoard[5] && jsBoard[8]) === 'o'))
  const diagOneWin = (((jsBoard[0] && jsBoard[4] && jsBoard[8]) === 'x') || ((jsBoard[0] && jsBoard[4] && jsBoard[8]) === 'o'))
  const diagTwoWin = (((jsBoard[2] && jsBoard[4] && jsBoard[6]) === 'x') || ((jsBoard[2] && jsBoard[4] && jsBoard[6]) === 'o'))

  if ((rowOneWin === true) ||
      (rowTwoWin === true) ||
      (rowThreeWin === true) ||
      (colOneWin === true) ||
      (colTwoWin === true) ||
      (colThreeWin === true) ||
      (diagOneWin === true) ||
      (diagTwoWin === true)) {
    console.log(currentPlayer, 'is the winner!')
  // need to stop the game in this function once a winner is declared!!
  }
}

const onMakeMove = (event) => {
  event.preventDefault()
  //  if I grab the data index-number now, I can then put an X in that specific,
  // data index # cell?
  const cellIndexValue = $(event.target).data('index')
  console.log('cellIndexValue:', cellIndexValue)

  // const checkForWinner = () => {
  //   console.log('checkForWinner is running!')
  //   if (((jsBoard[0] === jsBoard[1]) === jsBoard[2]) ||
  //     ((jsBoard[3] === jsBoard[4]) === jsBoard[5]) ||
  //     ((jsBoard[6] === jsBoard[7]) === jsBoard[8]) ||
  //     ((jsBoard[0] === jsBoard[4]) === jsBoard[8]) ||
  //     ((jsBoard[2] === jsBoard[4]) === jsBoard[6]) ||
  //     ((jsBoard[0] === jsBoard[3]) === jsBoard[6]) ||
  //     ((jsBoard[1] === jsBoard[4]) === jsBoard[7]) ||
  //     ((jsBoard[2] === jsBoard[5]) === jsBoard[8])) {
  //     // need to stop game and tell users who won
  //     console.log(currentPlayer, 'won the game!!!')
  //   }
  // }

  // make an x or o appear in cell when clicked; switch players:
  const changePlayer = () => {
    if (currentPlayer === 'x') {
      $(event.target).html('x')
      // push current player value to index in array correspondsing to the data
      // value of the cell (before switching players)
      jsBoard.splice(cellIndexValue, 1, 'x')
      checkForWinner()
      currentPlayer = 'o'
      // tell the user who the current player is!
    } else {
      $(event.target).html('o')
      jsBoard.splice(cellIndexValue, 1, 'o')
      checkForWinner()
      currentPlayer = 'x'
      // tell the user who the current player is!
    }
    console.log('jsBoard:', jsBoard)
  }

  if ($(event.target).html() === '') {
    changePlayer()
    // need to figure out a way to store the currentPlayer in store file?
    // want to push the cellIndexValue to the jsBoard array
    // it will correspond to the index # in the JS game board array
  }
}

// reset button:
const onResetGame = (event) => {
  event.preventDefault()
  // clear cells
  $('.cell').html('')
  // clear JS gameboard
  jsBoard = ['', '', '', '', '', '', '', '', '']
}

// function to check for winner (after every move?)
// const checkForWinner = () => {
//   if (jsBoard[0] === jsBoard[1] === jsBoard[2] ||
//     jsBoard[3] === jsBoard[4] === jsBoard[5] ||
//     jsBoard[6] === jsBoard[7] === jsBoard[8] ||
//     jsBoard[0] === jsBoard[4] === jsBoard[8] ||
//     jsBoard[2] === jsBoard[4] === jsBoard[6] ||
//     jsBoard[0] === jsBoard[3] === jsBoard[6] ||
//     jsBoard[1] === jsBoard[4] === jsBoard[7] ||
//     jsBoard[2] === jsBoard[5] === jsBoard[8]) {
//     // need to stop game and tell users who won
//     console.log(currentPlayer, 'won the game!!!')
//   }
// }

module.exports = {
  onMakeMove,
  onResetGame
}
