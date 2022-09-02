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

const bondCode = `I am fake James bond. My code is : 00${7+1+2}`
// console.log(bondCode);

const data = {result: [{username: {title:'Mr.',name:"shakib khan"}}]}
// console.log(data.result[0].username.name);

const array = {hobbies: ["dancing","singing","acting"]};
console.log(JSON.stringify(array));