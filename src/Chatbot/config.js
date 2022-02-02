import { createChatBotMessage } from "react-chatbot-kit";
import MainOptions from "./components/MainOptions";
import KycOptions from "./components/KycOptions";
import ServiceRequestFormOptions from "./components/ServiceRequestFormOptions";
import FormISR1 from './components/Forms/FormISR1';
import FormISR2 from './components/Forms/FormISR2';

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
      widgetFunc: (props) => <ServiceRequestFormOptions {...props} />,
    },
    {
      widgetName: "handleFormIsr1",
      widgetFunc: (props) => <FormISR1 {...props}/>
    },
    {
      widgetName: "handleFormIsr2",
      widgetFunc: (props) => <FormISR2 {...props}/>
    }
  ],
};

export default config;
