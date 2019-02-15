
const onMakeMove = (event) => {
  event.preventDefault()
  //  if I grab the data index-number now, I can then put an X in that specific,
  // data index # cell?
  const cellIndexValue = $(event.target).data('index')
  console.log('I got clicked!')
  console.log('cellIndexValue:', cellIndexValue)
  // want to make an x or o appear in cell
  // $(event.target).html('X')

  const changePlayer = () => {
    // once leaveYourMark has run, then I should switch from player X to player O
    console.log('changePlayer is running')
    let currentPlayer = 'X'

    if (currentPlayer === 'X') {
      currentPlayer = 'X'
    } else {
      currentPlayer = 'O'
    }
    console.log('currentPlayer is:', currentPlayer)
    leaveYourMark(currentPlayer)
  }

  const leaveYourMark = (player) => {
    console.log('leaveYourMark is running')
    console.log('player is:', player)
    if (player === 'X') {
      $(event.target).html('X')
    } else if (player === 'O') {
      $(event.target).html('O')
    }
  }

  changePlayer()
  // when clicked, if the cell is blank, add a mark (x), if there is a mark already,
  // then leave the mark there.
  // when clicked, if the cell is blank, add a mark (x), if there is a mark already,
  // then leave the mark there.

  // also need to save the cellIndexValue
  // it will correspond to the index # in the JS game board array
}

module.exports = {
  onMakeMove
}
