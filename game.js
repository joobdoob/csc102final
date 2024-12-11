function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function logMessage(message) {
    const log = document.getElementById('game-log');
    log.innerHTML += `<p>${message}</p>`;
  }

  function playCraps() {
    document.getElementById('game-log').innerHTML = ''; // Clear log on new game

    // Roll two dice
    let die1 = rollDie();
    let die2 = rollDie();
    let sum = die1 + die2;

    logMessage(`You rolled: ${die1} + ${die2} = ${sum}`);

    // First roll rules
    if (sum === 7 || sum === 11) {
      logMessage("You win!");
      return;
    } else if (sum === 2 || sum === 3 || sum === 12) {
      logMessage("You lose!");
      return;
    }

    // No immediate win or loss
    let point = sum;
    logMessage(`Your point is: ${point}`);

    // Keep rolling until you win or lose
    while (true) {
      die1 = rollDie();
      die2 = rollDie();
      sum = die1 + die2;

      logMessage(`You rolled: ${die1} + ${die2} = ${sum}`);

      if (sum === point) {
        logMessage("You made your point! You win!");
        break;
      } else if (sum === 7) {
        logMessage("You rolled a 7! You lose!");
        break;
      }
    }
  }