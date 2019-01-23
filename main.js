var money = process.argv[2];

function change(money) {
  var coins = {two: 0, five: 0, ten: 0};
  var rest = 0;

  rest = money % 10;
  coins.ten = Math.trunc(money / 10);

  if (rest == 0) return coins; // couvre les x10 

  if (coins.ten <= 0) {
    if (rest < 5 && rest % 2 == 0) coins.two = rest / 2;
    else if (rest == 5) coins.five = 1;
    else if (rest > 5) {
      if ((rest - 5) % 2 == 0) { // rest 7 ou 9
        coins.five = 1;
        coins.two = (rest - 5) / 2;
      } else if (rest % 2 == 0) { // rest 6 ou 8
        coins.two = rest / 2;
      }
    } else {
      coins = null; // couvre 1 et 3
    }
  } else { // si au moins un billet de 10
    if (rest < 5 && rest % 2 == 0) coins.two = rest / 2; // si rest 2 ou 4
    else if (rest == 5) coins.five = 1; // rest 5
    else if (rest > 5) {
      if ((rest - 5) % 2 == 0) { // rest 7 ou 9
        coins.five = 1;
        coins.two = (rest - 5) / 2;
      } else if (rest % 2 == 0) { // rest 6 ou 8
        coins.two = rest / 2;
      }
    } else { // si rest 1 ou 3, on retire un billet de 10, on ajoute un billet de 5 et le reste en pieces de 2
      coins.ten -= 1;
      rest += 10;
      coins.five = 1;
      coins.two = (rest - 5) / 2;
    }
  }
  return coins;
}

console.log('resultat: ', change(money));