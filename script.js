const marqueeMsgs =
[
  "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
  "site budget does not exceed 12",
  "muuuuu",
  "raccoon sound",
  "fun fact! this marquee is actually a transcription of what i'm saying irl right now. send me hate mail to test it :3c",
  "credit to tabby for the random message script",
  "this message won't appear"
]

function splash() {
  document.getElementById("change").innerHTML = marqueeMsgs[Math.floor(Math.random() * marqueeMsgs.length)]
}

splash()
