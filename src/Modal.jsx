import React from 'react';
import './Modal.css'; // Modal'ın stilini burada kullanacağız

const Modal = ({ isOpen, handleClose }) => {
  if (!isOpen) {
    return null; // Eğer modal açık değilse, hiç render etme
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={handleClose}>X</button>
        <h3>Popup Başlığı</h3>
        <p>Bu popup modaldır!</p>
        <div className="modal-actions">
          <button className="btn" onClick={handleClose}>Kapat</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
