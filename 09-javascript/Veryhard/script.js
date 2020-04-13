var coins = [1, 2, 5]
var  amount = 14;

function veryHard(coins, amount) {
    coins.sort((a, b) => a - b).reverse();
    var count = 0;
    for (var i = 0; i < coins.length; i++) {
        while (amount >= coins[i]) {
            amount -= coins[i];
            count++;
        }
    }
    if (amount !== 0){
        return -1;
    }


    return count;
}

console.log(veryHard(coins, amount));