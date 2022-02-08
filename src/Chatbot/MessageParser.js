class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();

    if (lowercase === "kyc") {
      this.actionProvider.handleKYC();
    }
    if (lowercase === "service request forms") {
      this.actionProvider.handleServiceRequestForm();
    }

    if (lowercase.includes("what is kyc")) {
      this.actionProvider.handleKYCQues1();
    }

    if (lowercase.includes("non-updation of kyc")) {
      this.actionProvider.handleKycQuestions(2);
    }
    if (lowercase.includes("registeration of kyc")) {
      this.actionProvider.handleKycQuestions(3);
    }
    if (lowercase.includes("status of pan linked to aadhar")) {
      this.actionProvider.handleKycQuestions(6);
    }

    if (lowercase === "nomination") {
      this.actionProvider.handleNomination();
    }

    if (lowercase.includes("register pan/update kyc")) {
      this.actionProvider.handleFormQuestions(1);
    }

    if (lowercase.includes("change/updation of bank details")) {
      this.actionProvider.handleFormQuestions(2);
    }

    if (lowercase.includes("opt-out of nomination")) {
      this.actionProvider.handleFormQuestions(3);
    }
    if (lowercase.includes("registration of new nomination")) {
      this.actionProvider.handleFormQuestions(4);
    }
    if (lowercase.includes("cancellation / change in nomination")) {
      this.actionProvider.handleFormQuestions(5);
    }
  }
}

export default MessageParser;
