class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }
  greet = () => {
    const message = this.createChatBotMessage("Hello Friend.");
    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  handleJavascriptQuiz = () => {
    const message = this.createChatBotMessage(
      "Fantastic. Hers is your quiz. Good luck!",
      {
        widget: "javascriptQuiz",
      }
    );
    this.addMessageToState(message);
  };

  handlePythonQuiz = () => {
    const message = this.createChatBotMessage(
      "Fantastic. Hers is your quiz. Good luck!",
      {
        widget: "pythonQuiz",
      }
    );
    this.addMessageToState(message);
  };

  handleReactQuiz = () => {
    const message = this.createChatBotMessage(
      "Fantastic. Hers is your quiz. Good luck!",
      {
        widget: "reactQuiz",
      }
    );
    this.addMessageToState(message);
  };

  handleWeatherAPI = () => {
    const message = this.createChatBotMessage(
      "Yeah Sure. Here's the weather of your current location...🙂",
      {
        widget: "weather",
      }
    );
    this.addMessageToState(message);
  };
}

export default ActionProvider;
