import React, { useEffect } from "react";
import { setFormID } from "../../../actions/FornIdAction";
import { useSelector, useDispatch } from "react-redux";

function FormMsgComponent({ id }) {
  const formTypeId = useSelector((state) => state.setFormId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFormID(id));
  }, []);

  return <p>Choose any one option</p>;
}

export default FormMsgComponent;
