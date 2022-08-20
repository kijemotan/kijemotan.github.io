const marqueeMsgs =
[
  "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
  "site budget does not exceed 12",
  "muuuuu",
  "raccoon sound",
  "fun fact! this marquee is actually a transcription of what i'm saying irl right now. send me hate mail to test it :3c",
  "credit to tabby for the random message script",
  "oh crap",
  "4 quid",
  "your mother",
  "`discordapp.com` > `discord.com`",
  "oh the misery",
  ":vaporeon_melt:",
  "sudo rm -rf /*",
  "oh worm?",
  "Is linux an virus",
  "this script breaks when r,un locally, i have to push it to github EVERY TIME i change it so i can test if it works. heck. frick. crap.",
  "ТНІЅ ІЅ ТОТАꙆꙆУ ЯЦЅЅІАИ",
  "TNIDZ IDZ TOTAIIU YATSDZDZIAI"
]

const marquee = document.getElementById("change");

function splash() {
  marquee.innerHTML = marqueeMsgs[Math.floor(Math.random() * marqueeMsgs.length)];
  console.log("Website used Splash!");
}

marquee.addEventListener('animationiteration', splash);

splash();
