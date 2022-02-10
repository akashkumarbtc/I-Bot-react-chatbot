import React from 'react';

export const displayPdfFile = (file) => {
  return { 
      type: "SET_DISPLAY_TRUE",
      payload: file
  }
}

export const closePdfFile = () => {
  return { 
      type: "SET_DISPLAY_FALSE",
  }
}
