import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { BiSave, BiPrinter, BiX } from 'react-icons/bi';
import "./main.css";

function Main() {
  const [text, setText] = useState('');

  const modules = {
    toolbar: {
      container: [
        [{ 'header': '1'}, { 'header': '2'}, { 'header': '3'}, { 'font': [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'color': [] }, { 'background': [] }],
        ['link', 'image'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        ['indent', 'outdent'],
        ['align', 'direction'],
      ],
    },
  };

//   const formats = [
//     'header',
//     'font',
//     'bold', 'italic', 'underline', 'strike', 'blockquote',
//     'color', 'background',
//     'link', 'image',
//     'list', 'bullet', 'ordered',
//     'indent', 'outdent',
//     'align', 'direction',
//   ];

  const handlePrint = () => {
    window.print();
  };

  const handleSave = () => {
    const textToSave = text;
    const blob = new Blob([textToSave], { type: 'application/vnd.oasis.opendocument.text' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'documento.odt';
    a.style.display = 'none';

    document.body.appendChild(a);
    a.click();


    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const handleClose = () => {
    if (window.confirm('¿Desea cerrar el editor?')) {
      window.close(); 
    }
  };

  return (
    <div className="editor-container">
      <div className="editor-toolbar">
        <button onClick={handlePrint} className="toolbar-button">
          <BiPrinter /> Imprimir
        </button>
        <button onClick={handleSave} className="toolbar-button">
          <BiSave /> Guardar como ODT
        </button>
        <button onClick={handleClose} className="toolbar-button">
          <BiX /> Cerrar
        </button>
      </div>
      <ReactQuill value={text} onChange={setText} modules={modules}  />
    </div>
  );
}

export default Main;
