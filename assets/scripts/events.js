
const onMakeMove = (event) => {
  event.preventDefault()
  //  if I grab the data index-number now, I can then put an X in that specific,
  // data index # cell?
  const cellIndexValue = $(event.target).data('index')
  console.log('I got clicked!')
  console.log('cellIndexValue:', cellIndexValue)
  // want to make an x or o appear in cell
  // when clicked, if the cell is blank, add a mark (x), if there is a mark already,
  // then leave the mark there.
  $(event.target).html('X')
  console.log('I got clicked!')
  // when clicked, if the cell is blank, add a mark (x), if there is a mark already,
  // then leave the mark there.

  // also need to save the cellIndexValue
  // it will correspond to the index # in the JS game board array
}

module.exports = {
  onMakeMove
}
