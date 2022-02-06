import { createChatBotMessage } from "react-chatbot-kit";
import MainOptions from "./components/MainOptions";
import KycOptions from "./components/KycOptions";
import HowToDoKYC from './components/HowToDoKYC';
import LastWorkflow from './components/LastWorkflow';
import ServiceRequestFormOptions from "./components/ServiceRequestFormOptions";
import FormISR1 from './components/Forms/FormISR1';
import FormISR2 from './components/Forms/FormISR2';
import FormISR3 from './components/Forms/FormISR3';
import FormSH13 from './components/Forms/FormSH13';
import FormSH14 from './components/Forms/FormSH14';
import FormType from './components/Forms/FormType';
import FinalWorkflow from './components/Forms/FinalWorkflow';
import PdfFormDisplay from './components/Forms/PdfFormDisplay';

const config = {
  botName: "I-BOT",
  initialMessages: [
    createChatBotMessage(`Welcome to Link Intime Chatbot. Please select an option`, {
      widget: "options",
    }),
  ],
  // state: {
  //   setDisplayForm: "false",
  //   setPdfFile : "" ,
  // },
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
      widgetName: "howToDoKYC",
      widgetFunc: (props) => <HowToDoKYC {...props} />,
    },
    {
      widgetName: "lastWorkflow",
      widgetFunc: (props) => <LastWorkflow {...props} />,
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
      widgetName: "handleISR1Form",
      widgetFunc: (props) => <PdfFormDisplay {...props}/>
    },
    {
      widgetName: "finalWorkflow",
      widgetFunc: (props) => <FinalWorkflow {...props}/>
    },
  ],
};

export default config;
