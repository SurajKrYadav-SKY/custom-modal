import React, { useState } from "react";
import "./Modal.scss";
import ModalContent from "./ModalContent";

const Modal = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(true);
  };

  return (
    <div className="buttons">
      <button className="contactButton" onClick={handleModal}>
        Open Modal
      </button>
      {openModal && <ModalContent setOpenModal={setOpenModal} />}
    </div>
  );
};

export default Modal;
