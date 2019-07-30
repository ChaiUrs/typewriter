/*
const sentence = "hello there from lighthouse labs";
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write (char);
  }, 1000) // <=  
}
*/

const sentence = "hello there from lighthouse labs\n";

const output = (array, count, repeat) => {
  setTimeout(() => {
    process.stdout.write(sentence[count]);
    if (count < repeat)
    output(array, ++count, repeat); //pre-increment => ++count value will increase while executing this line.
  }, (Math.random() * 250) + 100);
};
output(sentence, 0, sentence.length - 1);
