import { createChatBotMessage } from "react-chatbot-kit";
import MainOptions from "./components/MainOptions";
import KycOptions from "./components/KycOptions";
import ServiceRequestFormOptions from './components/ServiceRequestFormOptions';

const config = {
  initialMessages: [
    createChatBotMessage(`Hello. Select an option`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <MainOptions {...props} />,
    },
    {
      widgetName: "handleKYC",
      widgetFunc: (props) => <KycOptions {...props} />,
    },
    { 
        widgetName: "handleServiceRequestForm",
        widgetFunc: (props) => <ServiceRequestFormOptions {...props} />
    }
  ],
};

export default config;
