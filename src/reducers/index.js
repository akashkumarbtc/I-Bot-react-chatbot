import {combineReducers} from "redux";
import {DisplayPdf} from "./DisplayPdfReducers";
import {FormId} from "./FormIdReducer"


const rootReducer = combineReducers({
    displayPDF: DisplayPdf,
    setFormId: FormId

})

export default rootReducer