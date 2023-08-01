const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')
const selectBr = document.getElementById('currency-select-br')
const valueCurrent = document.getElementById('value-currency-current')




const convertValue = async () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')


    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    console.log(data)
    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        {
            style: 'currency',
            currency: 'BRL'
        }
    ).format(inputReais)

    if (select.value === "US$ Dólar Americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
            {
                style: 'currency',
                currency: 'USD'
            }
        ).format(inputReais / dolar)
    valueCurrent.innerText = `Valor base para calcúlo: R$ ${dolar}`

    }

    if (select.value === '€ Euro') {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            {
                style: 'currency',
                currency: 'EUR'
            }
        ).format(inputReais / euro)
        valueCurrent.innerText = `Valor base para calcúlo: R$ ${euro}`
    
        }
       
    

    if (select.value === '₿ Bitcoin') {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
            {
                style: 'currency',
                currency: 'BTC'
            }
        ).format(inputReais / bitcoin)
        valueCurrent.innerText = `Valor base para calcúlo: R$ ${bitcoin}`
    }
}
   


const changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if (select.value === 'US$ Dólar Americano') {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/eua.png"
    }

    if (select.value === '₿ Bitcoin') {
        currencyName.innerHTML = "Moeda Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }

    convertValue()
  

}


 const focusCurrency = () => {

    const currencyImgBr = document.getElementById('currency-img-br')


    if (selectBr.value === 'R$ Real Brasileiro') {

        currencyImgBr.src = "./assets/brasil.png"

    }

 }


button.addEventListener('click', convertValue)
select.addEventListener('change', changeCurrency)
selectBr.addEventListener('focus', focusCurrency)