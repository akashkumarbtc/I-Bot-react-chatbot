
const initState = {
    setDisplay: false,
    pdfFile: null
};
export const DisplayPdf = (state=initState, action) => {

    switch (action.type) {
        case "SET_DISPLAY_FALSE": 
            return { setDisplay: false, pdfFile: null}

        case "SET_DISPLAY_TRUE": 
            return { setDisplay: true, pdfFile: action.payload}

        default:
            return state
    }
}
