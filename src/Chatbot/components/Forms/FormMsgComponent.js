import React, { useEffect } from "react";
import { setFormId } from "../../../reducers/FormIdReducer";
import { useSelector, useDispatch } from "react-redux";

function FormMsgComponent({ id }) {
  const formId = useSelector((state) => state.setFormId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFormId(id));
  }, []);

  return <p>Choose any one option</p>;
}

export default FormMsgComponent;
