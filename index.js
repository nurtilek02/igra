const game = (userChoice) => {
    const values = ['камень', 'ножницы', 'бумага']

    const userValue = userChoice === 'камень' ? 0 : userChoice === 'ножницы' ? 1 : 2
    const progValue = Math.floor(Math.random() * 3)

    const progChoice = values[progValue]
    let winner = ''

    if (userValue === 0 && progValue === 1
        || userValue === 1 && progValue === 2
        || userValue === 2 && progValue === 0
    ) {
        winner = 'Победил пользователь'
    }
    else if (userValue === 1 && progValue === 0
          || userValue === 2 && progValue === 1
          || userValue === 0 && progValue === 2
    ) {
        winner = 'Победил компьютер'
    }  
    console.log(`Вы показали ${userChoice}, компьютер показал ${progChoice}, ${winner}`);
}
game('камень')