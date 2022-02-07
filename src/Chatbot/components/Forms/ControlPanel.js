import React from "react";
import PDFPrinter from "./PDFPrinter";
import { useDispatch } from "react-redux";
import { closePdfFile } from "../../../actions/PdfDisplayActions";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/umd/Page/AnnotationLayer.css";

const ControlPanel = (props) => {
  const {
    file,
    pdffile,
    pageNumber,
    numPages,
    setPageNumber,
    scale,
    setScale,
  } = props;

  const isFirstPage = pageNumber === 1;
  const isLastPage = pageNumber === numPages;

  const firstPageClass = isFirstPage ? "disabled" : "clickable";
  const lastPageClass = isLastPage ? "disabled" : "clickable";

  const goToFirstPage = () => {
    if (!isFirstPage) setPageNumber(1);
  };
  const goToPreviousPage = () => {
    if (!isFirstPage) setPageNumber(pageNumber - 1);
  };
  const goToNextPage = () => {
    if (!isLastPage) setPageNumber(pageNumber + 1);
  };
  const goToLastPage = () => {
    if (!isLastPage) setPageNumber(numPages);
  };

  const onPageChange = (e) => {
    const { value } = e.target;
    setPageNumber(Number(value));
  };

  const isMinZoom = scale < 0.6;
  const isMaxZoom = scale >= 2.0;

  const zoomOutClass = isMinZoom ? "disabled" : "clickable";
  const zoomInClass = isMaxZoom ? "disabled" : "clickable";

  const zoomOut = () => {
    if (!isMinZoom) setScale(scale - 0.1);
  };

  const zoomIn = () => {
    if (!isMaxZoom) setScale(scale + 0.1);
  };

  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(closePdfFile());
  };

  return (
    <div className="control-panel m-3 p-3 d-flex align-items-baseline justify-content-between">
      <div className="d-flex justify-content-between align-items-baseline">
        <i
          className={`fas fa-fast-backward fa-2x mx-3 ${firstPageClass}`}
          onClick={goToFirstPage}
        />
        <i
          className={`fas fa-backward fa-2x mx-3 ${firstPageClass}`}
          onClick={goToPreviousPage}
        />
        <span>
          Page{" "}
          <input
            name="pageNumber"
            type="number"
            min={1}
            max={numPages || 1}
            className="p-0 pl-1 mx-2"
            value={pageNumber}
            onChange={onPageChange}
          />{" "}
          of {numPages}
        </span>
        <i
          className={`fas fa-forward mx-3 fa-2x ${lastPageClass}`}
          onClick={goToNextPage}
        />
        <i
          className={`fas fa-fast-forward mx-3 fa-2x ${lastPageClass}`}
          onClick={goToLastPage}
        />
      </div>
      <div className="d-flex justify-content-between align-items-baseline">
        <i
          className={`fas fa-search-minus mx-3 fa-2x ${zoomOutClass}`}
          onClick={zoomOut}
        />
        <span>{(scale * 100).toFixed()}%</span>
        <i
          className={`fas fa-search-plus mx-3 fa-2x ${zoomInClass}`}
          onClick={zoomIn}
        />
      </div>
      <div className="mx-3">
        <a href={file} download={true} title="download">
          <i className="fas fa-file-download clickable fa-2x" />
        </a>
      </div>
      <div className="mx-3">
        <PDFPrinter file={pdffile} />
      </div>
      <div className="mx-3">
        <button
          style={{
            backgroundColor: "#fff",
            border: "none",
          }}
          onClick={closeHandler}
        >
          <i className="fas fa-times clickable fa-2x" />
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
