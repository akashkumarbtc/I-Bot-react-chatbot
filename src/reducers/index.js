import {combineReducers} from "redux";
import {DisplayPdf} from "./DisplayPdfReducers";
import {setFormId} from "./FormIdReducer"


const rootReducer = combineReducers({
    displayPDF: DisplayPdf,
    setFormId: setFormId

})

export default rootReducer