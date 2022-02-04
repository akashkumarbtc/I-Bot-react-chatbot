import KYCQuestions from "./Data/KYCQuestions";
import FormsQuestions from "./Data/FormsQuestions";
import PdfFormDisplay from "./components/Forms/PdfFormDisplay";
import KycQues1 from "./components/KycQues1";
import ISR1Vanilla from "../forms/ISR-1-Vanilla.pdf";

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
    const Cmessage = this.createClientMessage("KYC");
    const message = this.createChatBotMessage(
      "Please Select one of the options",
      {
        widget: "handleKYC",
      }
    );

    this.addMessageToState(Cmessage);
    this.addMessageToState(message);
  };

  handleKYCQues1 = () => {
    const Cmessage = this.createClientMessage("What is KYC?");
    const message = this.createChatBotMessage(<KycQues1 />, {
      widget: "handleKYC",
    });
    this.addMessageToState(Cmessage);
    this.addMessageToState(message);
  };

  handleServiceRequestForm = () => {
    const Cmessage = this.createClientMessage("Service Request Forms");
    const message = this.createChatBotMessage(
      "Please Select one of the options",
      {
        widget: "handleServiceRequestForm",
      }
    );
    this.addMessageToState(Cmessage);
    this.addMessageToState(message);
  };

  handleKycQuestions = (id) => {
    // eslint-disable-next-line array-callback-return
    KYCQuestions.map((question) => {
      if (question.id === id) {
        const Cmessage = this.createClientMessage(`${question.question}`);
        const answer = this.createChatBotMessage(`${question.answer}`, {
          widget: "handleKYC",
        });
        this.addMessageToState(Cmessage);
        this.addMessageToState(answer);
      }
    });
  };

  handleFormQuestions = (id) => {
    // eslint-disable-next-line array-callback-return
    FormsQuestions.map((question) => {
      if (question.id === id) {
        const Cmessage = this.createClientMessage(`${question.question}`);
        const answer = this.createChatBotMessage(`${question.answer}`, {
          widget: `${question.name}`,
        });
        this.addMessageToState(Cmessage);
        this.addMessageToState(answer);
      }
    });
  };

  handleFormIsr1 = () => {
    const Cmessage = this.createClientMessage("Form ISR 1");
    const message = this.createChatBotMessage(
      "Please Select one of the options",
      {
        widget: "handleFormIsr1",
      }
    );
    this.addMessageToState(Cmessage);
    this.addMessageToState(message);
  };

  handleFormIsr2 = () => {
    const Cmessage = this.createClientMessage("Form ISR 2");
    const message = this.createChatBotMessage(
      "Please Select one of the options",
      {
        widget: "handleFormIsr2",
      }
    );
    this.addMessageToState(Cmessage);
    this.addMessageToState(message);
  };

  handleFormIsr3 = () => {
    const Cmessage = this.createClientMessage("Form ISR 3");
    const message = this.createChatBotMessage(
      "Please Select one of the options",
      {
        widget: "handleFormIsr3",
      }
    );
    this.addMessageToState(Cmessage);
    this.addMessageToState(message);
  };

  handleFormSh13 = () => {
    const Cmessage = this.createClientMessage("Form SH 13");
    const message = this.createChatBotMessage(
      "Please Select one of the options",
      {
        widget: "handleFormSh13",
      }
    );
    this.addMessageToState(Cmessage);
    this.addMessageToState(message);
  };

  handleFormSh14 = () => {
    const Cmessage = this.createClientMessage("Form SH 14");
    const message = this.createChatBotMessage(
      "Please Select one of the options",
      {
        widget: "handleFormSh14",
      }
    );
    this.addMessageToState(Cmessage);
    this.addMessageToState(message);
  };

  handleFormType = () => {
    const Cmessage = this.createClientMessage("Form");
    const message = this.createChatBotMessage(
      "Please Select one of the options",
      {
        widget: "handleFormType",
      }
    );
    this.addMessageToState(Cmessage);
    this.addMessageToState(message);
  };

  handleVanillaForm = () => {
    const Cmessage = this.createClientMessage("Vanilla Form");
    const message = this.createChatBotMessage(
      <PdfFormDisplay pdf={ISR1Vanilla} /> //use react components for this and for kycQues1
    );
    this.addMessageToState(Cmessage);
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
