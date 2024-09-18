"use client";
import { useState } from "react";
import Header from "./components/header/Header";
import Modal from "./components/modal/Modal";
import { modalState } from "./store/Modal.store";
import { useSnapshot } from "valtio";

export default function Home() {
  const modalSnap = useSnapshot(modalState);
  return (
    <div>
      <Modal isOpen={modalSnap.isOpen} />
      <Header />
    </div>
  );
}
