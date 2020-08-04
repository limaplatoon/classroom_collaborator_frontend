import React from 'react'
import Popup from 'reactjs-popup'

const Modal = () => (
  <Popup
    trigger={<button className="button"> Open Modal </button>}
    modal
    closeOnDocumentClick
  >
    <span> Modal content </span>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni
        omnis delectus nemo, maxime molestiae dolorem numquam mollitia, voluptate
        ea, accusamus excepturi deleniti ratione sapiente! Laudantium, aperiam
        doloribus. Odit, aut.
      </p>
  </Popup>
);

export default Modal