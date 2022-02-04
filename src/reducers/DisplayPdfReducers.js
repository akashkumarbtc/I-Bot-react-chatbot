import React from 'react';
import PdfFormDisplay from "../forms/ISR-1-Vanilla.pdf";
const initState = {
    setDisplay: false,
    pdfFile: null
};
export const DisplayPdf = (state=initState, action) => {

    switch (action.type) {
        case "SET_DISPLAY_FALSE": 
            return { setDisplay: true}

        case "SET_DISPLAY_TRUE": 
            return { setDisplay: true, pdfFile: action.payload}

        default:
            return state
    }
}
