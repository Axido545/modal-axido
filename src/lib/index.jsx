import "./index.css"
import closeImg from "./close.png"

export default function ModalAxido({ textModal, handleClose }) {

    return < main className="main-modal" >
        <div className="modal-container">
            <img className="close-btn" src={closeImg} alt="close-btn" onClick={handleClose} />
            <h3>Modal Titre</h3>
            <p className="modal-text">{textModal}</p>
        </div>
    </main >
}