import React, {  useEffect } from "react";
import { useDispatch } from 'react-redux';
import { displayPdfFile } from '../../../actions/PdfDisplayActions';

const ViewMessage = ({pdf}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(displayPdfFile(pdf))
      }, [pdf])

  return (
      <p >View/ Download pdf file</p>
  );
};

export default ViewMessage;
