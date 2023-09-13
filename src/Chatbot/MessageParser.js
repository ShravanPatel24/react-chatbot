class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();

    if (lowercase.includes("hello")) {
      this.actionProvider.greet();
    } else if (lowercase.includes("javascript") || lowercase.includes("js")) {
      this.actionProvider.handleJavascriptQuiz();
    } else if (lowercase.includes("python") || lowercase.includes("py")) {
      this.actionProvider.handlePythonQuiz();
    } else if (lowercase.includes("react")) {
      this.actionProvider.handleReactQuiz();
    } else if (lowercase.includes("weather")) {
      this.actionProvider.handleWeatherAPI();
    } else {
      this.actionProvider.handleElseBlock();
    }
  }
}

export default MessageParser;
