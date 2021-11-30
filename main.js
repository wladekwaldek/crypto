async function getResponse() {
    let response = await fetch('https://api.coincap.io/v2/assets/bitcoin')
    let content = await response.json()

    let a = document.querySelector('.coin')

    let key;

    for(key in content) {
        a.innerHTML += `
            <h1>${content[key].name}</h1>
            <p>${content[key].priceUsd}</p>
        `
    }
}

getResponse()