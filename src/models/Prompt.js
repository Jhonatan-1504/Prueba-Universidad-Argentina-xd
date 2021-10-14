export class Prompt {
  #aswer = "";

  /**
   *
   * @param {Object} prompt
   * @param {string} prompt.id
   * @param {string} prompt.question
   * @param {string[]} prompt.validation
   */
  constructor({ id, question, validation }) {
    this.id = id;
    this.question = question;
    this.validation = validation;
  }

  get answer() {
    return this.#aswer;
  }

  setAnswer(text) {
    this.#aswer = text;
  }

  Message(index) {
    return `#${index}\n${this.question}\n◉ ${this.validation.join("\n◉ ")}`;
  }

  isCorrectAnswer(textAnswer) {
    let isCorrect = false;

    if (this.id === "precio" || this.id === "unidades") {
      if(this.validation.length > 2) return "Solo debe un rango entre 2 variables"
      isCorrect = this.validation[1] >= textAnswer && this.validation[0] <= textAnswer
    } else {
      isCorrect = this.validation.filter(
        (correctAnswer) => correctAnswer == textAnswer
      ).length;
    }
    if (!isCorrect) {
      alert(`Por favor escriba cualquiera de las opciones validas`);
      return this.Render();
    }
    this.setAnswer(textAnswer);
  }

  isEmpty(textAnswer) {
    if (!textAnswer) {
      alert(`Es importante asignar: ${this.id}`);
      return this.Render();
    }
  }

  Render(index = 1) {
    const answer = prompt(this.Message(index), this.validation[0]);
    this.isEmpty(answer);
    this.isCorrectAnswer(answer);
    return answer;
  }
}
