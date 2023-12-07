"use client";
import React from "react";
import ReactDom from "react-dom";
import useCart from "./(store)/store";

export default function Modal() {
  const closeModal = useCart((state) => state.setOpenModal);

  return ReactDom.createPortal(
    <div className="fixed top-0 left-0 w-screen h-screen z-50">
      <div
        onClick={closeModal}
        className="bg-transparent inset-0 absolute "
      ></div>
      <div className="flex flex-col bg-white absolute right-0 top-0 h-screen shadow w-screen sm:w-96 max-w-screen gap-4">
        <div className="flex items-center justify-between text-xl relative p-6">
          <h1>CART</h1>
          <i
            onClick={closeModal}
            className="fa-solid fa-x cursor-pointer hover:opacity-80"
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-slate-300 w-2/3"></div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
