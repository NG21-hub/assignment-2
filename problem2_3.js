function rollDiceUntilThree() {
    let rolls = 0;
    let dice;
  
    do {
      dice = Math.floor(Math.random() * 6) + 1;
      rolls++;
    } while (dice !== 3);
  
    return rolls;
  }
  
  function determineWinner() {
    const aRolls = rollDiceUntilThree();
    const bRolls = rollDiceUntilThree();
  
    console.log(`User A rolled a three in ${aRolls} rolls.`);
    console.log(`User B rolled a three in ${bRolls} rolls.`);
  
    if (aRolls < bRolls) {
      console.log("User A wins!");
    } else if (bRolls < aRolls) {
      console.log("User B wins!");
    } else {
      console.log("It's a tie!");
    }
  }
  
  determineWinner();