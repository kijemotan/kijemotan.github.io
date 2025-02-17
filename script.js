const marqueeMsgs =
[
  "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
  "site budget does not exceed 12",
  "muuuuu",
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
  "TNIDZ IDZ TOTAIIU YATSDZDZIAI",
  "mi! wile! ala! sa!",
  "WAN TU SAN PO LUKA SAN SAN LIKUJO",
  "the",
  "mu",
  "AND PLAYIN' I LOVE JUNK EATING FOOD CLASSIC GAMES Do U? Just Fraggin' Think you're a Certified \"Gamer?\"? Get Down Power Up Gamin' All day Max stats E-sports RAM",
  "i live in spain but without the a",
  "why do they call it oven when you of in the cold food of out hot eat the food?",
  "sudo cp -if /dev/urandom -of /dev/fb0"
]

const marquee = document.getElementById("change");

function splash() {
  marquee.innerHTML = marqueeMsgs[Math.floor(Math.random() * marqueeMsgs.length)];
  console.log("Website used Splash!");
}

marquee.addEventListener('animationiteration', splash);

splash();
