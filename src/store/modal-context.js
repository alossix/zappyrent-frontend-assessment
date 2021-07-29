import React, { useState } from 'react';

const ModalContext = React.createContext({
  modalIsOpen: false,
  setModalIsOpen: () => {},
  modalListing: {},
  setModalListing: () => {},
  modalOpenHandler: () => {},
  modalCloseHandler: () => {},
});

export const ModalContextProvider = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState();
  const [modalListing, setModalListing] = useState({});

  const modalOpenHandler = (listing) => {
    document.body.style.overflow = 'hidden';
    setModalListing(listing);
    setModalIsOpen(true);
  };

  const modalCloseHandler = () => {
    document.body.style.overflow = 'scroll';
    setModalIsOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        modalIsOpen: modalIsOpen,
        setModalIsOpen: setModalIsOpen,
        modalListing: modalListing,
        setModalListing: setModalListing,
        modalOpenHandler: modalOpenHandler,
        modalCloseHandler: modalCloseHandler,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
