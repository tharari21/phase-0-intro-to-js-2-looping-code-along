// Code your solutions in this file

const writeCards = (names) => {
  const messageArr = [];

  for (const name of names) {
    messageArr.push(`Thank you, ${name}, for the wonderful surprise gift!`);
  }

  return messageArr;
};
const countDown = (num) => {
  for (let i = num; i > -1; i--) {
    console.log(i);
  }
};
