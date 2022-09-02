/* const loadQuoteP1 = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote1(data))
}

const displayQuote1 = quote =>{
    const blockQuoteP1 = document.getElementById('quote1')
    console.log(quote)
    blockQuoteP1.innerText = quote.quote;
}
 */

const loadQ = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => dispalyQ(data))
}

const dispalyQ = quote =>{
    const blockQ = document.getElementById('quote1')
    console.log(quote.quote)
    blockQ.innerText = quote.quote;
}
loadQ();