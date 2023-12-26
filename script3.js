function get() {
    const quotes = { 
    "-Vicky": '"Hard Work Never Fails"',"— Dalai Lama":"The purpose of our lives is to be happy.",
    "— John Lennon" : '"Life is what happens when you\'re busy making other plans."',
    "— Stephen King":'"Get busy living or get busy dying."',
    "— Mae West":'"You only live once, but if you do it right, once is enough."',
    " Babe Ruth":'"Never let the fear of striking out keep you from playing the game."',
    "— Will Smith":'"Money and success don’t change people; they merely amplify what is already there."',
    "– Steve Jobs":'"Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking."',
};
    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random() * authors.length)];
    var quote = quotes[author];
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}
