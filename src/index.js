function tellMeJoke() {
  let jokeElement = document.querySelector("#joke");
  jokeElement.innerHTML = "I am thinking about a joke for you...";

  let apikey = "79c10854b8bbfdaa4tfa826305864ob5";
  let context = "be polite";
  let prompt = "tell me a joke about gas engineers or a gas workes";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apikey}`;

  axios
    .get(apiUrl)
    .then(function (response) {
      jokeElement.innerHTML = response.data.answer;
    })
    .catch(function (error) {
      jokeElement.innerHTML = "Oops! Something went wrong.";
      console.error(error);
    });
}

let jokeButton = document.querySelector("#JokeButton");
jokeButton.addEventListener("click", tellMeJoke);
