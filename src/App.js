import ModalAxido from "./lib";

function App() {
  const textModal = "Modal texte message Modal texte message Modal texte message Modal texte message  Modal texte message Modal texte message Modal texte message Modal texte message"
  const handleClose = () => {
  }
  return <>
    <ModalAxido textModal={textModal} handleClose={handleClose} />
  </>
}

export default App;
