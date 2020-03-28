// ONPLACETILE: function that checks if cell in board is empty.
// if empty, function will call api and ui functions and update
// game in api and ui that corresponds to cell-clicked.
const onPlaceTile = function (event) {
  if (store.game.cells[event.target.id] === '')
  {
    $(event.target).html('<h1 class="tilePlaced">' + currentPlayer + '</h1>')

    api.placeTile(event.target.id, currentPlayer, checkGameForWin())

      .then(ui.placeTileSuccess)

      .catch(ui.placeTileFail)

    if (currentPlayer === 'X')
    {
      currentPlayer = 'O'
    }

    else if (currentPlayer === 'O')
    {
      currentPlayer = 'X'
    }

    $('#player-turn').html('<h1 class="tilePlaced">' + currentPlayer + '</h1>')
  }

  else
  {
    $('#message').html(`<h1>YOU CANNOT PLACE A TILE THERE</h1>`)
    $('#message').removeClass()
    $('#message').addClass('failure')
  }
}
