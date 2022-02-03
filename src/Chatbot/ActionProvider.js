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

  handleMain = () => {
    const message = this.createChatBotMessage(
      "Please Select one of the options",
      {
        widget: "options",
      }
    );

    this.addMessageToState(message);
  };

  handleKYC = () => {
    const message = this.createChatBotMessage(
      "Please Select one of the options",
      {
        widget: "handleKYC",
      }
    );

    this.addMessageToState(message);
  };

  handleKYCQues1 = () => {
    const message = this.createChatBotMessage("answer", {
      widget: "handleKYCQues1",
    });

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
        const answer = this.createChatBotMessage(`${question.answer}`, {
          widget: "handleKYC",
        });
        this.addMessageToState(answer);
      }
    });
  };

  handleFormQuestions = (id) => {
    // eslint-disable-next-line array-callback-return
    FormsQuestions.map((question) => {
      if (question.id === id) {
        const answer = this.createChatBotMessage(`${question.answer}`, {
          widget: `${question.name}`,
        });
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

  handleFormIsr3 = () => {
    const message = this.createChatBotMessage(
      "Please Select one of the options",
      {
        widget: "handleFormIsr3",
      }
    );
    this.addMessageToState(message);
  };

  handleFormSh13 = () => {
    const message = this.createChatBotMessage(
      "Please Select one of the options",
      {
        widget: "handleFormSh13",
      }
    );
    this.addMessageToState(message);
  };

  handleFormSh14 = () => {
    const message = this.createChatBotMessage(
      "Please Select one of the options",
      {
        widget: "handleFormSh14",
      }
    );
    this.addMessageToState(message);
  };

  handleFormType = () => {
    const message = this.createChatBotMessage(
      "Please Select one of the options",
      {
        widget: "handleFormType",
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
