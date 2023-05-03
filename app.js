// Variables


let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let author = document.querySelector('.author')

const quotes = [
  {
    quote: "\"Be the change you wish to see in the world.\"",
    author: "Mahatma Gandhi"
  },
  {
    quote: "\"The only way to do great work is to love what you do.\"",
    author: "Steve Jobs"
  },
  {
    quote: "\"In three words I can sum up everything I've learned about life: it goes on.\"",
    author: "Robert Frost"
  },
  {
    quote: "\"You miss 100% of the shots you don't take.\"",
    author: "Wayne Gretzky"
  },
  {
    quote: "\"Success is not final, failure is not fatal: it is the courage to continue that counts.\"",
    author: "Winston Churchill"
  },
  {
    quote: "\"The future belongs to those who believe in the beauty of their dreams.\"",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "\"Happiness is not something ready made. It comes from your own actions.\"",
    author: "Dalai Lama"
  },
  {
    quote: "\"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.\"",
    author: "Oprah Winfrey"
  },
  {
    quote: "\"I have not failed. I've just found 10,000 ways that won't work.\"",
    author: "Thomas A. Edison"
  },
  {
    quote: "\"I can't change the direction of the wind, but I can adjust my sails to always reach my destination.\"",
    author: "Jimmy Dean"
  },
  {
    quote: "\"The only thing necessary for the triumph of evil is for good men to do nothing.\"",
    author: "Edmund Burke"
  },
  {
    quote: "\"The best way to predict the future is to invent it.\"",
    author: "Alan Kay"
  },
  {
    quote: "\"Believe you can and you're halfway there.\"",
    author: "Theodore Roosevelt"
  },
  {
    quote: "\"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.\"",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "\"It does not matter how slowly you go as long as you do not stop.\"",
    author: "Confucius"
  },
  {
    quote: "\"I'm not afraid of storms, for I'm learning how to sail my ship.\"",
    author: "Louisa May Alcott"
  },
  {
    quote: "\"The best revenge is massive success.\"",
    author: "Frank Sinatra"
  },
  {
    quote: "\"The greatest glory in living lies not in never falling, but in rising every time we fall.\"",
    author: "Nelson Mandela"
  },
  {
    quote: "\"You don't have to be great to start, but you have to start to be great.\"",
    author: "Zig Ziglar"
  },
  {
    quote: "\"The two most important days in your life are the day you are born and the day you find out why.\"",
    author: "Mark Twain"
  }
];


console.log(quotes.length)

function generate() {
    const random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
}

btn.addEventListener('click', generate);

(function (){ 
     const random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
})();