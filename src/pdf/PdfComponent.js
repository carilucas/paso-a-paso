import React from 'react'

export const PdfComponent = ({source}) => {
   return (
      <div className="pdf-container">
         <iframe src={`https://docs.google.com/viewer?url=${source}&embedded=true`}  frameBorder="0" title={ source }></iframe>
      </div>
   )
}
