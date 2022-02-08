import KYCQuestions from "./Data/KYCQuestions";
import FormsQuestions from "./Data/FormsQuestions";
import PdfFormDisplay from "./components/Forms/PdfFormDisplay";
import KycQues1 from "./components/KycQues1";
import ISR1Vanilla from "../forms/ISR-1-Vanilla.pdf";
import ISR1Filable from "../forms/ISR1-Fillable.pdf";
import ISR1Prefilled from "../forms/ISR1-Prefilled.pdf";
import ISR2Vanilla from "../forms/ISR2Vanilla.pdf";
import ISR2Filable from "../forms/ISR2-Fillable.pdf";
import ISR2Prefilled from "../forms/ISR2-Prefilled.pdf";
import ISR3Vanilla from "../forms/ISR-3-Vanilla.pdf";
import ISR3Filable from "../forms/ISR3-Fillable.pdf";
import ISR3Prefilled from "../forms/ISR3-Prefilled.pdf";
import SH13Vanilla from "../forms/SH13-Vanilla.pdf";
import SH13Filable from "../forms/SH13-Fillable.pdf";
import SH13Prefilled from "../forms/SH13-Prefilled.pdf";
import SH14Vanilla from "../forms/SH14-Vanilla.pdf";
import SH14Filable from "../forms/SH14-Fillable.pdf";
import SH14Prefilled from "../forms/SH14-Prefilled.pdf";
import ViewMessage from "./components/Forms/ViewMessage";
import FormMsgComponent from "./components/Forms/FormMsgComponent";
import ThankYou from "./components/ThankYou";
import HOwToDoKycAnswer from "./components/HOwToDoKycAnswer";
import Nominations from "./components/Nominations";

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
      "Please select an option from the main menu",
      {
        widget: "options",
      }
    );

    this.addMessageToState(message);
  };

  handleKYC = (id) => {
    const Cmessage = this.createClientMessage("KYC");
    const message = this.createChatBotMessage("Please select a KYC question", {
      widget: "handleKYC",
    });

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
      "Choose any service request forms",
      {
        widget: "handleServiceRequestForm",
      }
    );
    this.addMessageToState(Cmessage);
    this.addMessageToState(message);
  };

  handleNomination = () => {
    const message = this.createChatBotMessage(
      "Choose any service request forms",
      {
        widget: "handleNomination",
      }
    );
    this.addMessageToState(message);
  };

  handleKycQuestions = (id) => {
    // eslint-disable-next-line array-callback-return
    KYCQuestions.map((question) => {
      if (question.id === id) {
        const Cmessage = this.createClientMessage(`${question.question}`);
        let answer = null;
        if (id === 0 || id === 1 || id === 2) {
          answer = this.createChatBotMessage(`${question.answer}`, {
            widget: "handleKYC",
          });
        } else if (id === 3) {
          answer = this.createChatBotMessage(<HOwToDoKycAnswer />, {
            widget: "howToDoKYC",
          });
        } else if (id === 7) {
          answer = this.createChatBotMessage(<ThankYou />);
        } else if (id === 8) {
          answer = this.createChatBotMessage(`${question.answer}`);
        } else {
          answer = this.createChatBotMessage(`${question.answer}`, {
            widget: "lastWorkflow",
          });
        }
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

  handleFormIsr1 = (id) => {
    const Cmessage = this.createClientMessage("Form ISR 1");
    const message = this.createChatBotMessage(<FormMsgComponent id={id} />, {
      widget: "handleFormIsr1",
    });
    this.addMessageToState(Cmessage);
    this.addMessageToState(message);
  };

  handleFormIsr2 = (id) => {
    const Cmessage = this.createClientMessage("Form ISR 2");
    const message = this.createChatBotMessage(<FormMsgComponent id={id} />, {
      widget: "handleFormIsr2",
    });
    this.addMessageToState(Cmessage);
    this.addMessageToState(message);
  };

  handleFormIsr3 = (id) => {
    const Cmessage = this.createClientMessage("Form ISR 3");
    const message = this.createChatBotMessage(<FormMsgComponent id={id} />, {
      widget: "handleFormIsr3",
    });
    this.addMessageToState(Cmessage);
    this.addMessageToState(message);
  };

  handleFormSh13 = (id) => {
    const Cmessage = this.createClientMessage("Form SH 13");
    const message = this.createChatBotMessage(<FormMsgComponent id={id} />, {
      widget: "handleFormSh13",
    });
    this.addMessageToState(Cmessage);
    this.addMessageToState(message);
  };

  handleFormSh14 = (id) => {
    const Cmessage = this.createClientMessage("Form SH 14");
    const message = this.createChatBotMessage(<FormMsgComponent id={id} />, {
      widget: "handleFormSh14",
    });
    this.addMessageToState(Cmessage);
    this.addMessageToState(message);
  };

  handleFormType = (id) => {
    const Cmessage = this.createClientMessage("View or Download");
    const message = this.createChatBotMessage(
      "Please select the type of form",
      {
        widget: "handleFormType",
      }
    );
    this.addMessageToState(Cmessage);
    this.addMessageToState(message);
  };

  handleISR1Form = (id) => {
    let Cmessage = "";
    let pdf = "";
    if (id === 1) {
      Cmessage = this.createClientMessage("Vanilla Form");
      pdf = ISR1Vanilla;
    } else if (id === 2) {
      Cmessage = this.createClientMessage("Fillable Form");
      pdf = ISR1Filable;
    } else if (id === 3) {
      Cmessage = this.createClientMessage("Pre-filled Form");
      pdf = ISR1Prefilled;
    }
    console.log("here before");
    const message = this.createChatBotMessage(<ViewMessage pdf={pdf} />, {
      widget: "finalWorkflow",
    });
    this.addMessageToState(Cmessage);
    this.addMessageToState(message);
  };

  handleISR2Form = (id) => {
    let Cmessage = "";
    let pdf = "";
    if (id === 1) {
      Cmessage = this.createClientMessage("Vanilla Form");
      pdf = ISR2Vanilla;
    } else if (id === 2) {
      Cmessage = this.createClientMessage("Fillable Form");
      pdf = ISR2Filable;
    } else if (id === 3) {
      Cmessage = this.createClientMessage("Pre-filled Form");
      pdf = ISR2Prefilled;
    }
    console.log("here before");
    const message = this.createChatBotMessage(<ViewMessage pdf={pdf} />, {
      widget: "finalWorkflow",
    });
    this.addMessageToState(Cmessage);
    this.addMessageToState(message);
  };

  handleISR3Form = (id) => {
    let Cmessage = "";
    let pdf = "";
    if (id === 1) {
      Cmessage = this.createClientMessage("Vanilla Form");
      pdf = ISR3Vanilla;
    } else if (id === 2) {
      Cmessage = this.createClientMessage("Fillable Form");
      pdf = ISR3Filable;
    } else if (id === 3) {
      Cmessage = this.createClientMessage("Pre-filled Form");
      pdf = ISR3Prefilled;
    }
    console.log("here before");
    const message = this.createChatBotMessage(<ViewMessage pdf={pdf} />, {
      widget: "finalWorkflow",
    });
    this.addMessageToState(Cmessage);
    this.addMessageToState(message);
  };

  handleSH13Form = (id) => {
    let Cmessage = "";
    let pdf = "";
    if (id === 1) {
      Cmessage = this.createClientMessage("Vanilla Form");
      pdf = SH13Vanilla;
    } else if (id === 2) {
      Cmessage = this.createClientMessage("Fillable Form");
      pdf = SH13Filable;
    } else if (id === 3) {
      Cmessage = this.createClientMessage("Pre-filled Form");
      pdf = SH13Prefilled;
    }
    console.log("here before");
    const message = this.createChatBotMessage(<ViewMessage pdf={pdf} />, {
      widget: "finalWorkflow",
    });
    this.addMessageToState(Cmessage);
    this.addMessageToState(message);
  };

  handleSH14Form = (id) => {
    let Cmessage = "";
    let pdf = "";
    if (id === 1) {
      Cmessage = this.createClientMessage("Vanilla Form");
      pdf = SH14Vanilla;
    } else if (id === 2) {
      Cmessage = this.createClientMessage("Fillable Form");
      pdf = SH14Filable;
    } else if (id === 3) {
      Cmessage = this.createClientMessage("Pre-filled Form");
      pdf = SH14Prefilled;
    }
    console.log("here before");
    const message = this.createChatBotMessage(<ViewMessage pdf={pdf} />, {
      widget: "finalWorkflow",
    });
    this.addMessageToState(Cmessage);
    this.addMessageToState(message);
  };

  handleFillableForm = (id) => {
    const Cmessage = this.createClientMessage("Fillable Form");
    const message = this.createChatBotMessage(
      <PdfFormDisplay id={id} /> //use react components for this and for kycQues1
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
