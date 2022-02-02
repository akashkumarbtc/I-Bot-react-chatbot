import KYCQuestions from './Data/KYCQuestions';

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
      "Please Select one of the options",
      {
        widget: "handleKYC",
      }
    );

    this.addMessageToState(message);
  };

  handleServiceRequestForm = () => {
    const message = this.createChatBotMessage(
      "Please Select one of the options",
      {
        widget: "handleServiceRequestForm",
      }
    );

    this.addMessageToState(message);
  };

  handleKycQuestions = (id) => {
    KYCQuestions.map((question) =>{
      if(question.id === id){
    const answer = this.createChatBotMessage(`${question.answer}`)
    this.addMessageToState(answer);
      }
    })
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
