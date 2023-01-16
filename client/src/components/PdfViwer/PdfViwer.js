import { useState } from 'react'
import './PdfViwer.css'
import  {useParams} from 'react-router-dom';

import { Worker } from '@react-pdf-viewer/core';

// Import the main component
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';


function PdfViwer() {

    const {url} = useParams();

  const [pdfFile, setPdfFile] = useState(null);

  const [pdfError, setPdfError] = useState('');


  const allowedFiles = ['application/pdf']

//    const handleFile = (e) =>{
//     let selectedFile = e.target.files[0];
    // console.log(selectedFile.type);

    let selectedFile = url

    if(selectedFile)
    {
      if(selectedFile&&allowedFiles.includes(selectedFile.type)){
          let reader = new FileReader();
          reader.readAsDataURL(selectedFile);
          reader.onloadend = (e)=> {
            setPdfError('');
            setPdfFile(e.target.result);
          }
      }
      else{
        setPdfError('Not a valid Pdf: Please select only PDF');
      }
    }
    else
    {
      console.log('please select a pdf');
    }
//    }

  return (
    <>
    <div className='container'>

    {pdfError&&<span className='text-danger'>{pdfError}</span>}

      <h5 className='text-center'>View PDF</h5>

      <div className='container-1'>

        {pdfFile&&(
           <Worker workerUrl="\https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js">
            <Viewer fileUrl={pdfFile}></Viewer>
           </Worker>
        )}

        {!pdfFile&&<>No File is Selected yet</>}
      </div>

    </div>
    </>
  )
}

export default PdfViwer 