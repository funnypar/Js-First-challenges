"use strict";

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get the answer
    const answer = parseInt(
      prompt(`${this.question}\n\n${this.options.join("\n")}`)
    );
    // console.log(answer);

    // register answer
    typeof answer === "number" &&
      answer < this.options.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`The results are : \n${this.answers.join(", ")}`);
    }
  },
};
// poll.registerNewAnswer();

document
  .querySelector(".pollAnswer")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));
