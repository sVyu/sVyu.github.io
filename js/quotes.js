const quotes = [
    {
      quote: "It's risky to climb on the branch, but that's where all the fruit is.",
      author: "Rose Winn",
    },
    {
      quote: "Miracles happen to only those who believe in them.",
      author: "Bernard Berenson",
    },
    {
      quote: "The only thing we have to fear is fear itself.",
      author: "Franklin Roosevelt",
    },
    {
      quote: "Failure is delay, but not defeat. It is a temporary detour, not a dead-end street.",
      author: "William Ward",
    },
    {
      quote: "I will prepare, and some day my chance will come.",
      author: "Abraham Lincoln",
    },
    {
      quote: "Only a life lived for others is a life worthwhile.",
      author: "Albert Einstein",
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West",
    },
    {
      quote: "Learn as if you would live forever, live as if you would die tomorrow.",
      author: "Mahatma Gandhi",
    },
    {
      quote: "Fate loves the fearless.",
      author: "James Russell Lowell",
    },
    {
      quote: "Zest is the secret of all beauty. There is no beauty that is attractive without zest.",
      author: "Christian Dior",
    },
  ];
  
const imgChange = document.querySelector("#img-change");

const quote = document.querySelector("#quote-box span:first-child");
const author = document.querySelector("#quote-box span:last-child");

function changeQuote(){
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;
}

changeQuote()
imgChange.addEventListener("click", changeQuote);