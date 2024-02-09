import "./index.css"
import closeImg from "./close.png"

export default function ModalAxido() {
    return <main className="main-modal">
        <div className="modal-container">
            <img className="close-btn" src={closeImg} alt="close-btn" />
            <h1>Modal Titre</h1>
            <p>Modal texte message</p>
            <button>Annuler</button><button>Confirmer</button>
        </div>

    </main>
}