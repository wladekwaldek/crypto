

async function getResponse() {
    let response = await fetch('https://api.coincap.io/v2/assets/bitcoin')
    let content = await response.json()

    console.log(content)

    let coin = document.querySelector('.coin')
    let price = document.querySelector('.price')

    coin.innerHTML = `${content.data.name}`
    price.innerHTML = `${Math.floor(content.data.priceUsd * 100) / 100}`
    
}

setInterval(() => getResponse(), 5000)   