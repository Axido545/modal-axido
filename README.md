# Modal Axido React Component

ModalAxido is a simple React component displays a modal containing text passed through props.

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

    $ npm install --save modal-axido

    $ yarn add modal-axido

## Example

Here's an example of using ModalAxido:


```jsx
import React, { useState } from 'react';
import ModalAxido from 'modal-axido';

function Example() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      <ModalAxido
        textModal="Hello, this is a sample modal!"
        handleClose={handleModalClose}
        isOpen={modalOpen}
      />
    </div>
  );
}

export default Example;
```

### Props definitions

textModal: String, the text to display in the modal.
handlClose: Function, the function to call to close the modal.
isOpen: Boolean, determines whether the modal is displayed or not.