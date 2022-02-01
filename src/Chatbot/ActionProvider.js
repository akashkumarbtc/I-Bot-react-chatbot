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

  handleKYC = () => {
    const message = this.createChatBotMessage(
      "Please Select One of the below options",
      {
        widget: "handleKYC",
      }
    );

    this.addMessageToState(message);
  };

   handleServiceRequestForm = () => {
    const message = this.createChatBotMessage(
      "Please Select One of the below options",
      {
        widget: "handleServiceRequestForm",
      }
    );

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
