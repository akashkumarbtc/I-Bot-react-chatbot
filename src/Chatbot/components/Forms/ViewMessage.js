import React, {  useEffect } from "react";
import { useDispatch } from 'react-redux';
import { displayPdfFile } from '../../../actions/PdfDisplayActions';

const ViewMessage = ({pdf}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        console.log("here")
        dispatch(displayPdfFile(pdf))
      }, [pdf])

  return (
  <div>
      <p>View/ Download pdf file</p>
  </div>
  );
};

export default ViewMessage;
