
const initState = {
 formTypeId: 0
};
export const FormId = (state=initState, action) => {

  switch (action.type) {
      case "SET_FORM_ID": 
          return { formTypeId: action.payload}

      case "SET_DISPLAY_TRUE": 
          return { formTypeId: 0 }

      default:
          return state
  }
}
