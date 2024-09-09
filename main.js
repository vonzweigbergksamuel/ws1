console.log('hello world')

const player1 = {
    name: 'player1',
    color: 'red'
} 

const player2 = {
    name: 'player2',
    color: 'blue'
}

const sqaure1 = document.getElementById('square1')
const sqaure2 = document.getElementById('square2')
const sqaure3 = document.getElementById('square3')
const sqaure4 = document.getElementById('square4')
const sqaure5 = document.getElementById('square5')
const sqaure6 = document.getElementById('square6')
const sqaure7 = document.getElementById('square7')
const sqaure8 = document.getElementById('square8')
const sqaure9 = document.getElementById('square9')

const winningScenarios = [
    [sqaure1, sqaure2, sqaure3],
    [sqaure4, sqaure5, sqaure6],
    [sqaure7, sqaure8, sqaure9],
    [sqaure1, sqaure4, sqaure7],
    [sqaure2, sqaure5, sqaure8],
    [sqaure3, sqaure6, sqaure9],
    [sqaure1, sqaure5, sqaure9],
    [sqaure3, sqaure5, sqaure7]
]

let currentPlayer = player1

if (currentPlayer === player1) {
    currentPlayer = player2
} else {
    currentPlayer = player1
}

sqaure1.addEventListener('click', () => {
    sqaure1.style.backgroundColor = currentPlayer.color
    checkWin()
})

function checkWin() {
  for (let i = 0; i < winningScenarios.length; i++) {
    const winningScenario = winningScenarios[i]

    for (let i = 0; i < winningScenario.length; i++) {
      if ()
    }


    // if (square1.style.backgroundColor === currentPlayer.color && square2.style.backgroundColor === currentPlayer.color && square3.style.backgroundColor === currentPlayer.color) {
    //     alert(`${currentPlayer.name} wins!`)
    // }
  }
}


