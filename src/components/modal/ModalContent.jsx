import { useEffect } from "react";
import "./ModalContent.scss";


const ModalContent = ({ setOpenModal }) => {

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    }
  }, []);

  return (
    <>


    <div className="modal"></div>
      <div className="Modal-container">
        
        <div className="title" style={{color : "black"}}>
          <span>Title</span>
        </div>
        <hr />
        <div className="body">
          <p>Body Content </p> 
        </div>
        <hr />
        <div className="closeBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            Close
          </button>
        </div>
      </div>
      </>
  );
};

export default ModalContent;
