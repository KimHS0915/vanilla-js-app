const quotes = [
  {
    quote:
      "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Be always at war with your vices, at peace with your neighbors, and let each new year find you a better man.",
    author: "Benjamin Franklin",
  },
  {
    quote: "The unexamined life is not worth living.",
    author: "Socrates",
  },
  {
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const displayRandomQuote = () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quote.innerText = randomQuote.quote;
  author.innerText = ` - ${randomQuote.author}`;
};

displayRandomQuote();
setInterval(displayRandomQuote, 60000);
