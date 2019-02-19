
let currentPlayer = 'x'
$('.userMessages').html('x starts the game!')
// my javascript game board for gamelogic:
let jsBoard = ['', '', '', '', '', '', '', '', '']

// function to check for winner (after every move?)
const checkForWinner = () => {
  const rowOneWinX = (jsBoard[0] === 'x' && jsBoard[1] === 'x' && jsBoard[2] === 'x')
  const rowOneWinO = (jsBoard[0] === 'o' && jsBoard[1] === 'o' && jsBoard[2] === 'o')
  const rowTwoWinX = (jsBoard[3] === 'x' && jsBoard[4] === 'x' && jsBoard[5] === 'x')
  const rowTwoWinO = (jsBoard[3] === 'o' && jsBoard[4] === 'o' && jsBoard[5] === 'o')
  const rowThreeWinX = (jsBoard[6] === 'x' && jsBoard[7] === 'x' && jsBoard[8] === 'x')
  const rowThreeWinO = (jsBoard[6] === 'o' && jsBoard[7] === 'o' && jsBoard[8] === 'o')
  const colOneWinX = (jsBoard[0] === 'x' && jsBoard[3] === 'x' && jsBoard[6] === 'x')
  const colOneWinO = (jsBoard[0] === 'o' && jsBoard[3] === 'o' && jsBoard[6] === 'o')
  const colTwoWinX = (jsBoard[1] === 'x' && jsBoard[4] === 'x' && jsBoard[7] === 'x')
  const colTwoWinO = (jsBoard[1] === 'o' && jsBoard[4] === 'o' && jsBoard[7] === 'o')
  const colThreeWinX = (jsBoard[2] === 'x' && jsBoard[5] === 'x' && jsBoard[8] === 'x')
  const colThreeWinO = (jsBoard[2] === 'o' && jsBoard[5] === 'o' && jsBoard[8] === 'o')
  const diagOneWinX = (jsBoard[0] === 'x' && jsBoard[4] === 'x' && jsBoard[8] === 'x')
  const diagOneWinO = (jsBoard[0] === 'o' && jsBoard[4] === 'o' && jsBoard[8] === 'o')
  const diagTwoWinX = (jsBoard[2] === 'x' && jsBoard[4] === 'x' && jsBoard[6] === 'x')
  const diagTwoWinO = (jsBoard[2] === 'o' && jsBoard[4] === 'o' && jsBoard[6] === 'o')

  if ((rowOneWinX === true) ||
      (rowOneWinO === true) ||
      (rowTwoWinX === true) ||
      (rowTwoWinO === true) ||
      (rowThreeWinX === true) ||
      (rowThreeWinO === true) ||
      (colOneWinX === true) ||
      (colOneWinO === true) ||
      (colTwoWinX === true) ||
      (colTwoWinO === true) ||
      (colThreeWinX === true) ||
      (colThreeWinO === true) ||
      (diagOneWinX === true) ||
      (diagOneWinO === true) ||
      (diagTwoWinX === true) ||
      (diagTwoWinO === true)) {
    // console.log(currentPlayer, 'is the winner!')
    $('.userMessages').html(currentPlayer + ' is the winner!')
    gameOver()
  // need to stop the game in this function once a winner is declared!!
  } else if (notEmpty(jsBoard)) {
    $('.userMessages').html(`It's a draw!`)
  }
}

// turns off click functionality on cells
const gameOver = () => {
  $('.cell').off('click', onMakeMove)
}

// function to check if all spaces are taken
const notEmpty = (arr) => {
  const isNotEmptyString = (value) => {
    return value !== ''
  }
  return arr.every(isNotEmptyString)
}

// my main function:
const onMakeMove = (event) => {
  event.preventDefault()

  const isValidMove = () => {
    if ($(event.target).html() !== '') {
      $('.userMessages').html(`Not a valid move.`)

      setTimeout(() => {
        $('.userMessages').html(`It's ${currentPlayer}'s turn!`)
      }, 1000)
    }
  }

  isValidMove()

  const cellIndexValue = $(event.target).data('index')
  console.log('cellIndexValue:', cellIndexValue)

  // make an x or o appear in cell when clicked; switch players:
  const changePlayer = () => {
    if (currentPlayer === 'x') {
      $(event.target).html('x')
      // push current player value to index in array correspondsing to the data
      // value of the cell (before switching players):
      jsBoard.splice(cellIndexValue, 1, 'x')
      $('.userMessages').html(`It's o's turn!`)
      checkForWinner()
      currentPlayer = 'o'
      // tell the user who the current player is!
    } else {
      $(event.target).html('o')
      jsBoard.splice(cellIndexValue, 1, 'o')
      $('.userMessages').html(`It's x's turn!`)
      checkForWinner()
      currentPlayer = 'x'
      // tell the user who the current player is!
    }
    console.log('jsBoard:', jsBoard)
    // console.log('all x or o', allXOrO(jsBoard))
  }

  if ($(event.target).html() === '') {
    changePlayer()
    // need to figure out a way to store the currentPlayer in store file?
  }
}

// reset button:
const onResetGame = (event) => {
  event.preventDefault()
  // clear cells
  $('.cell').html('')
  $('.userMessages').html('x starts the game!')
  // clear JS gameboard
  jsBoard = ['', '', '', '', '', '', '', '', '']
  $('.cell').on('click', onMakeMove)
}

module.exports = {
  onMakeMove,
  onResetGame
}
