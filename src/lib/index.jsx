import "./index.css"
import closeImg from "./close.png"

export default function ModalAxido() {
    return <main className="main-modal">
        <div className="modal-container">
            <img className="close-btn" src={closeImg} alt="close-btn" />
            <h3>Modal Titre</h3>
            <p className="modal-text">Modal texte message Modal texte message Modal texte message Modal texte message  Modal texte message Modal texte message Modal texte message Modal texte message</p>
            <div className="btn-validations">
                <button className="btn-annuler">Annuler</button><button className="btn-confirmer">Confirmer</button>
            </div>

        </div>

    </main>
}