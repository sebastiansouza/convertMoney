const button = document.getElementById('convert-button')

const dolar = 5.2

const convertValue = () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')


    currencyValueText.innerHTML = inputReais / dolar
    realValueText.innerHTML = inputReais

    console.log(inputReais / dolar)

} 


button.addEventListener('click', convertValue)