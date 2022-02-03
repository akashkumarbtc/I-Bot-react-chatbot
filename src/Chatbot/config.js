import { createChatBotMessage } from "react-chatbot-kit";
import MainOptions from "./components/MainOptions";
import KycOptions from "./components/KycOptions";
import ServiceRequestFormOptions from "./components/ServiceRequestFormOptions";
import FormISR1 from './components/Forms/FormISR1';
import FormISR2 from './components/Forms/FormISR2';
import FormISR3 from './components/Forms/FormISR3';
import FormSH13 from './components/Forms/FormSH13';
import FormSH14 from './components/Forms/FormSH14';
import FormType from './components/Forms/FormType';
import VanillaForm from './components/Forms/VanillaForm';

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
    },
    {
      widgetName: "handleFormIsr3",
      widgetFunc: (props) => <FormISR3 {...props}/>
    },
    {
      widgetName: "handleFormSh13",
      widgetFunc: (props) => <FormSH13 {...props}/>
    },
    {
      widgetName: "handleFormSh14",
      widgetFunc: (props) => <FormSH14 {...props}/>
    },
    {
      widgetName: "handleFormType",
      widgetFunc: (props) => <FormType {...props}/>
    },
    {
      widgetName: "handleVanillaForm",
      widgetFunc: (props) => <VanillaForm {...props}/>
    },
  ],
};

export default config;
