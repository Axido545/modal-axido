import ModalAxido from "./lib";
// import useState from "react";


function App() {
  // const [isOpen, setIsOpen] = useState(false)
  const textModal = "Modal texte message Modal texte message Modal texte message Modal texte message  Modal texte message Modal texte message Modal texte message Modal texte message"
  const handleClose = () => {
    // setIsOpen(false)
  }
  return <>
    <ModalAxido textModal={textModal} handleClose={handleClose} />
  </>
}

export default App;
