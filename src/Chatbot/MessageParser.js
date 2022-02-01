class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();

    if (lowercase.includes("kyc")) {
      this.actionProvider.handleKYC();
    }
  if (lowercase.includes("service request forms")) {
      this.actionProvider.handleServiceRequestForm();
    }
}
}

export default MessageParser;
