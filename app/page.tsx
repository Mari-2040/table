"use client";
import { useState } from "react";
import Header from "./components/header/Header";
import Modal from "./components/modal/Modal";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <button onClick={toggleModal} className="openModal">
        open
      </button>
      <Modal isOpen={isOpen} onClose={closeModal} />
      <Header />
    </div>
  );
}
