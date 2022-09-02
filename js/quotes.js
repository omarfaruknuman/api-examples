const loadQuotes = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => dispalyQuote(data))
}
const dispalyQuote = quote => {
    const blockQuote = document.getElementById('quote')
    console.log(quote);
    blockQuote.innerText = quote.quote;

}