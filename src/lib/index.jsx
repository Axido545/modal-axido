import "./index.css"
import closeImg from "./close.png"
import { useState } from "react"

export default function ModalAxido() {
    const [isOpen, setIsOpen] = useState(true)

    const handleClose = () => {
        setIsOpen(false)
    }
    return isOpen ? (
        < main className="main-modal" >
            <div className="modal-container">
                <img className="close-btn" src={closeImg} alt="close-btn" onClick={handleClose} />
                <h3>Modal Titre</h3>
                <p className="modal-text">Modal texte message Modal texte message Modal texte message Modal texte message  Modal texte message Modal texte message Modal texte message Modal texte message</p>
                <div className="btn-validations">
                    <button className="btn-annuler">Annuler</button><button className="btn-confirmer">Confirmer</button>
                </div>

            </div>

        </main >) : null;
}