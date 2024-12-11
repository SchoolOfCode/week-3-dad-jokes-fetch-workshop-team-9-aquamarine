// Hardcoded array of joke objects
// Each joke object has a unique id
/*const jokesList = [
  {
    id: "A1bC2D",
    joke: "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
  },
  {
    id: "E3fG4H",
    joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
  },
  {
    id: "I5jK6L",
    joke: "Why don't skeletons fight each other? They don't have the guts.",
  },
  {
    id: "kH9pZU",
    joke: "What do you call a bear with no teeth? A gummy bear!",
  },
  {
    id: "L8nK5M",
    joke: "What do you call a fake noodle? An impasta!",
  },
  {
    id: "P9qR4N",
    joke: "Why don't eggs tell jokes? They'd crack up!",
  },
  {
    id: "T6vW2X",
    joke: "What do you call a sleeping bull? A bulldozer!",
  },
  {
    id: "Y7mB8K",
    joke: "Why did the cookie go to the doctor? Because it was feeling crumbly!",
  },
  {
    id: "Q4sJ9H",
    joke: "What do you call a bear without ears? B!",
  },
  {
    id: "G5fD3L",
    joke: "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
  },
  {
    id: "C2xZ7V",
    joke: "What do you call a pig that does karate? A pork chop!",
  },
  {
    id: "W8tN4M",
    joke: "Why don't scientists trust atoms? Because they make up everything!",
  },
  {
    id: "E1yH6B",
    joke: "What did the grape say when it got stepped on? Nothing, it just let out a little wine!",
  },
];*/

// Main function to retrieve and display a new joke
async function getAndDisplayNewJoke() {
  const jokeString = await retrieveJoke();
  displayJoke(jokeString);
}

// Function to retrieve a random joke
// Using a random generator from the array and returning its index
/*function retrieveJoke() {
  const randomIndex = Math.floor(Math.random() * jokesList.length);
  return jokesList[randomIndex];
}*/

async function retrieveJoke() {
  try {
    let dadApi = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await dadApi.json();
    //console.log(data);
    //console.log(data.joke);
    return data;
  } catch {
    console.error("There was an error!");
  }
}

// Function to update the DOM with the provided joke
// Pass the joke property from getAndDisplayNewJoke and updates the html Text content with the new joke
function displayJoke(jokeString) {
  const jokeElement = document.getElementById("writtenJoke");
  jokeElement.textContent = jokeString.joke;
}

// Waits for the DOM to be fully loaded and then displays an initial joke.
document.addEventListener("DOMContentLoaded", getAndDisplayNewJoke);

// Retrieves the "new joke" button
const newJokeButton = document.getElementById("newJokeBtn");

// Sets up a click event listener to fetch and display a new joke upon clicking the newJokeButton.
newJokeButton.addEventListener("click", getAndDisplayNewJoke);
