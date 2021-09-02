function clicked() {
    
    let quotes = ["Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs",
    "One day, in retrospect, the years of struggle will strike you as the most beautiful. Sigmund Freud",
    "In every man’s heart there is a secret nerve that answers to the vibrations of beauty. Christopher Morley", 
    "We must not allow other people’s limited perceptions to define us.", 
    "“Do what you can, with what you have, where you are.”"]
    
   let quotes_random = quotes[Math.floor(Math.random() * quotes.length)]; 
    document.getElementById('output').innerHTML = quotes_random;
}
