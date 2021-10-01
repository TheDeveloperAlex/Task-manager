import React, { MouseEvent, useEffect } from "react";
import { Overlay } from "./ModalStyled";



interface IModalProps {
  closeModal: boolean;
  setCloseModal: (active: boolean) =>  void ;
  children: JSX.Element;
  nameForm: string
}

type TBody = HTMLBodyElement

const Modal = ({
  closeModal,
  setCloseModal,
  children,
  nameForm = "Name form",
}: IModalProps) => {
  useEffect(() => {
    window.addEventListener("keydown", () => handleEscape); // Здесь было без функции
    const body:TBody = document.querySelector("body")!;
    if (closeModal) body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", () => handleEscape); // Здесь было без функции
      const body = document.querySelector("body")!;
      body.style.overflow = "auto";
    };
  });

  const handleEscape = (e :React.KeyboardEvent<HTMLInputElement>) => e.code === "Escape" && setCloseModal(false);

  const onOverlayClick = ({ target, currentTarget }: MouseEvent<HTMLButtonElement>) => {
    target === currentTarget && setCloseModal(false);
  };
  return (
    <>
      {closeModal && (
        <Overlay onClick={onOverlayClick}>
          <div className="modal">
            <button
              type="button"
              className="closeBtn"
              onClick={() => setCloseModal(false)}
            >
              <span className="material-icons-outlined">close</span>
            </button>
            <h2 className="nameForm">{nameForm}</h2>
            {children}
            <button
              type="button"
              className="cancelBtn"
              onClick={() => setCloseModal(false)}
            >
              Відміна
            </button>
          </div>
        </Overlay>
      )}
    </>
  );
};

export default Modal;
