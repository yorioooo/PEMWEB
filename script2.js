function convertCurrency() {
    let amount = document.getElementById('amount').value;
    let fromCurrency = document.getElementById('from-currency').value;
    let toCurrency = document.getElementById('to-currency').value;
    let resultElement = document.getElementById('conversion-result');

    if (amount === '') {
        resultElement.textContent = 'Masukkan jumlah yang valid.';
        return;
    }

    // Exchange rates for demonstration (you can replace these with real API calls)
    const exchangeRates = {
        USD: { IDR: 15000, EUR: 0.85, BHD: 0.38, JPY: 110 },
        IDR: { USD: 0.000067, EUR: 0.000056, BHD: 0.000025, JPY: 0.0073 },
        EUR: { USD: 1.18, IDR: 17500, BHD: 0.45, JPY: 130 },
        BHD: { USD: 2.65, EUR: 2.2, IDR: 40000, JPY: 290 },
        JPY: { USD: 0.0091, EUR: 0.0077, BHD: 0.0034, IDR: 135 }
    };

    let rate = exchangeRates[fromCurrency][toCurrency];
    if (!rate) {
        resultElement.textContent = 'Konversi mata uang tidak tersedia.';
        return;
    }

    let result = amount * rate;
    resultElement.textContent = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
}
