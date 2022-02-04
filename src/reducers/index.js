import {combineReducers} from "redux";
import {DisplayPdf} from "./DisplayPdfReducers";


const rootReducer = combineReducers({
    displayPDF: DisplayPdf,

})

export default rootReducer