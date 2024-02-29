import ModalAxido from "./lib/index.jsx";
import { useState } from "react";

export default function App() {
  const [openModal, setOpenModal] = useState(false)
  const textModal = "Modal texte message Modal texte message Modal texte message Modal texte message  Modal texte message Modal texte message Modal texte message Modal texte message"
  const handleClose = () => {
    setOpenModal(false)
  }
  return <>
    <button onClick={() => setOpenModal(true)}>Afficher la modal</button>
    <ModalAxido textModal={textModal} handleClose={handleClose} isOpen={openModal} />
  </>
}


