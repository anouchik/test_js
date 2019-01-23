var money = process.argv[2];

var coins = [2, 5, 10];

function change(money) {
  var i = coins.length - 1;

  var array = [];
  while (money >= coins[0]) {
    if (money >= coins[i]) {
      money -= coins[i];
      array.push(coins[i]);
    } else {
      i--;
    }
  }
  return array;
}

console.log('resultat : ', change(money));