
let currentPlayer = 'X'
// my javascript game board for gamelogic:
let jsBoard = ['', '', '', '', '', '', '', '', '']

const onMakeMove = (event) => {
  event.preventDefault()
  //  if I grab the data index-number now, I can then put an X in that specific,
  // data index # cell?
  const cellIndexValue = $(event.target).data('index')
  console.log('cellIndexValue:', cellIndexValue)

  // make an x or o appear in cell when clicked; switch players:
  const changePlayer = () => {
    if (currentPlayer === 'X') {
      $(event.target).html('X')
      // push current player value to index in array correspondsing to the data
      // value of the cell (before switching players)
      currentPlayer = 'O'
      // tell the user who the current player is!
    } else {
      $(event.target).html('O')
      // push current player value to index in array correspondsing to the data
      // value of the cell (before switching players)
      currentPlayer = 'X'
      // tell the user who the current player is!
    }
  }

  if ($(event.target).html() === '') {
    changePlayer()
    // need to figure out a way to store the currentPlayer in store file?
    // want to push the cellIndexValue to the jsBoard array
    // it will correspond to the index # in the JS game board array
  }
}

// // reset button:
const onResetGame = (event) => {
  event.preventDefault()
  // clear cells
  $('.cell').html('')
  // clear JS gameboard
  jsBoard = ['', '', '', '', '', '', '', '', '']
}

module.exports = {
  onMakeMove,
  onResetGame
}
