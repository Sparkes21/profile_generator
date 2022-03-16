const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)", (answer1) => {
  console.log(`Thank you ${answer1}!`);
  rl.question("What's an activity you like doing?", (answer2) => {
    console.log(`Thank you ${answer1}! ${answer2} sounds so fun!`);
    rl.question("What do you listen to while doing that?", (answer3) => {
      console.log(`You have great taste ${answer1}! ${answer3} is great to listen to at any time!`);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer4) => {
        console.log(`Good choice ${answer1}! ${answer4} is great!`);
        rl.question("What's your favourite thing to eat for that meal?", (answer5) => {
          console.log(`Wow ${answer1}, ${answer5} sounds delicious!`);
          rl.question("Which sport is your absolute favourite?", (answer6) => {
            console.log(`${answer6} has to be one of the best sports out there!`);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer7) => {
              console.log(`Thank you ${answer1}! I wish ${answer7} was my superpower!`);
              console.log(`${answer1} likes to ${answer2} while jamming out to some ${answer3}! Take ${answer1} out to ${answer4} for some ${answer5} if you really want to see them excited! ${answer1} loves to go see ${answer6} games and their super power is ${answer7}.`)
              rl.close();
            });  
          });
        });
      });
    });
  });          
});