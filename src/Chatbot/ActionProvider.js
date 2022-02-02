import KYCQuestions from "./Data/KYCQuestions";
import FormsQuestions from "./Data/FormsQuestions";

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
    // eslint-disable-next-line array-callback-return
    KYCQuestions.map((question) => {
      if (question.id === id) {
        const answer = this.createChatBotMessage(`${question.answer}`);
        this.addMessageToState(answer);
      }
    });
  };

  handleFormQuestions = (id) => {
    // eslint-disable-next-line array-callback-return
    FormsQuestions.map((question) => {
      if (question.id === id) {
        const answer = this.createChatBotMessage(`${question.answer}`);
        this.addMessageToState(answer);
      }
    });
  };

  handleFormIsr1 = () => {
    const message = this.createChatBotMessage(
      "Please Select one of the options",
      {
        widget: "handleFormIsr1",
      }
    );

    this.addMessageToState(message);
  };

  handleFormIsr2 = () => {
    const message = this.createChatBotMessage(
      "Please Select one of the options",
      {
        widget: "handleFormIsr2",
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
