import "./index.css"
import closeImg from "./close.png"
import PropTypes from "prop-types"

/**
 * @description ModalAxido composant react pour afficher une modal
 */
export default function ModalAxido({ textModal, handleClose, isOpen }) {
    return isOpen &&
        <div className="main-modal" >
            <div className="modal-container">
                <img className="close-btn" src={closeImg} alt="close-btn" onClick={handleClose} />
                <p className="modal-text">{textModal}</p>
            </div>
        </div>
}

ModalAxido.propTypes = {
    textModal: PropTypes.string,
    handleClose: PropTypes.func,
    isOpen: PropTypes.bool
}