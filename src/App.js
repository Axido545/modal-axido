import ModalAxido from "./lib";
import { useState } from "react";

function App() {
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

export default App;
