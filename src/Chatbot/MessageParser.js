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
    }

    if (lowercase.includes("javascript") || lowercase.includes("js")) {
      this.actionProvider.handleJavascriptQuiz();
    }

    if (lowercase.includes("python") || lowercase.includes("py")) {
      this.actionProvider.handlePythonQuiz();
    }

    if (lowercase.includes("react")) {
      this.actionProvider.handleReactQuiz();
    }
    
    if (lowercase.includes("weather")) {
      this.actionProvider.handleWeatherAPI();
    }
  }
}

export default MessageParser;
