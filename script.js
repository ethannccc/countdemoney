let coins = {
    penny: { value: 0.01, count: 0 },
    nickel: { value: 0.05, count: 0 },
    dime: { value: 0.10, count: 0 },
    quarter: { value: 0.25, count: 0 }
};

document.querySelectorAll('.coin').forEach(coin => {
    const coinType = coin.getAttribute('data-coin');
    const decreaseButton = coin.querySelector('.decrease');
    const increaseButton = coin.querySelector('.increase');
    const countElement = coin.querySelector('p');
    const balanceElement = coin.querySelector('.balance span');

    decreaseButton.addEventListener('click', () => {
        if (coins[coinType].count > 0) {
            coins[coinType].count--;
            update();
        }
    });

    increaseButton.addEventListener('click', () => {
        coins[coinType].count++;
        update();
    });

    function update() {
        const count = coins[coinType].count;
        countElement.textContent = count;
        const value = count * coins[coinType].value;
        balanceElement.textContent = `$${value.toFixed(2)}`;
        updateTotal();
    }

    function updateTotal() {
        let totalAmount = 0;
        for (const coinType in coins) {
            totalAmount += coins[coinType].count * coins[coinType].value;
        }
        document.getElementById('totalAmount').textContent = `$${totalAmount.toFixed(2)}`;
    }
});
