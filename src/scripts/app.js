const button = document.getElementById("tell-me");

async function getJoke() {
    const apiUrl =
        "https://sv443.net/jokeapi/v2/joke/Miscellaneous,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist&type=single";
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        tellJoke(data.joke);
    } catch (er) {
        tellJoke("No matching joke found");
        console.error("No matching joke found", er);
    }
}

function tellJoke(joke) {
    let utterance = new SpeechSynthesisUtterance(joke);
    if (SpeechSynthesis.speaking) {
        return;
    } else {
        speechSynthesis.speak(utterance);
        console.log(joke);
    }
}

function toogleButton() {
    button.disabled = !button.disabled;
}

button.addEventListener("click", () => {
    getJoke();
});
