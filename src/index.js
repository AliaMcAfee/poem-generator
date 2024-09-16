function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "04d7a4ta8ecdfa4b30ebd32f8c464o31";
  let context =
    "You are a romantic poem expert and love to write short love poems. Your mission is to generate a 5 line poem and separate each line with a <br />. Do not include the title of the poem. Separate the line and sign the poem with `AI Generator` inside a <strong> element at the end of the poem and NOT at the beginning.";
  let prompt = `Generate a love poem about ${instructionsInput}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
