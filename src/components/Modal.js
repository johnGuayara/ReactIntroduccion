import React from "react";
import ReacDOM from 'react-dom';
import './style/Modal.css'

    function Modal({children}){
        return ReacDOM.createPortal(
            <div className="ModalBackground">
      {children}
    </div>,
            document.getElementById("modal")
        );
    }
    export {Modal};