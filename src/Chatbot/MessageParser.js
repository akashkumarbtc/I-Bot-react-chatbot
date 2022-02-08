class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();

    if (message) {
    }
    console.log(this.state.clientMsg);
    if (lowercase === "kyc") {
      this.state.clientMsg = true;
      this.actionProvider.handleKYC();
    } else if (lowercase === "service request forms") {
      this.actionProvider.handleServiceRequestForm();
    } else if (lowercase.includes("what is kyc")) {
      this.state.clientMsg = true;
      this.actionProvider.handleKYCQues1();
    } else if (
      lowercase.includes("non-updation of kyc") ||
      lowercase.includes("non updation of kyc")
    ) {
      this.actionProvider.handleKycQuestions(2);
    } else if (
      lowercase.includes("registeration of kyc") ||
      lowercase.includes("how to do kyc")
    ) {
      this.actionProvider.handleKycQuestions(3);
    } else if (lowercase.includes("status of pan linked to aadhar")) {
      this.actionProvider.handleKycQuestions(6);
    } else if (lowercase === "nomination") {
      this.actionProvider.handleNomination();
    } else if (
      lowercase.includes("register pan/update kyc") ||
      lowercase.includes("register pan") ||
      lowercase.includes("update kyc")
    ) {
      this.actionProvider.handleFormQuestions(1);
    } else if (
      lowercase.includes("change/updation of bank details") ||
      lowercase.includes("updation of bank details") ||
      lowercase.includes("change of bank details")
    ) {
      this.actionProvider.handleFormQuestions(2);
    } else if (
      lowercase.includes("opt-out of nomination") ||
      lowercase.includes("opt out of nomination")
    ) {
      this.actionProvider.handleFormQuestions(3);
    } else if (
      lowercase.includes("registration of new nomination") ||
      lowercase.includes("new nomination") ||
      lowercase.includes("registration nomination")
    ) {
      this.actionProvider.handleFormQuestions(4);
    } else if (
      lowercase.includes("cancellation / change in nomination") ||
      lowercase.includes("cancel nomination") ||
      lowercase.includes("cancellation in nomination") ||
      lowercase.includes("change in nomination")
    ) {
      this.actionProvider.handleFormQuestions(5);
    } else if (lowercase.includes("main menu")) {
      this.actionProvider.handleMain(5);
    } else {
      this.actionProvider.handleDefaultMsg();
    }
  }
}

export default MessageParser;
