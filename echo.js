const echo = () => {
  const readline = require('readline');
  const moment = require('moment');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const repeatedQuestion = () => {
    rl.question('Say something:\n', (answer) => {
      if (answer === 'exit') return rl.close();
      console.log(`${moment().format('YYYY-MM-DD')} | ${moment().format('HH:mm')} | You said: '${answer}'!`);
      repeatedQuestion();
    });
  };

  rl.on("close", () => {
    console.log("Goodbye!");
    process.exit();
  });

  repeatedQuestion();
};

echo();

