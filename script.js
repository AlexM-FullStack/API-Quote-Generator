const quote = document.querySelector('.quote')
const author = document.querySelector('.author')
const btn = document.getElementById('btn')
const apiUrl = 'https://type.fit/api/quotes'
let random

btn.addEventListener('click', getQuote)

async function getQuote() {
    try {
        btn.innerHTML = 'Loading'
        btn.disabled = true

        const response = await fetch(apiUrl)
        const data = await response.json()
        console.log(data)

        random = Math.floor(Math.random() * data.length)
        quote.innerHTML = `${data[random].text}`
        author.innerHTML = '~ ' + `${data[random].author}`

        btn.innerHTML = 'Search'
        btn.disabled = false
    
    } catch (error) {

        quote.innerHTML = 'Request failed, try again later!'
        quote.classList.add('error')
        author.innerHTML = 'Not available!'
        author.classList.add('error')

        btn.innerHTML = 'Search'
        btn.disabled = false

    }
}



