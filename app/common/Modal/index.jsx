"use client";
import React, { useEffect, useRef, useState } from "react";

import Close from "./icons/close";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
export const Actions = () => {
  return <section className="w-full h-[100px] bg-slate-400"></section>;
};
export default function Index({
  children,
  open,
  onClose,
  width,
  title,
  px,
  py,
}) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const modalBox = useRef();
  const modalWrapper = useRef();
  const modalOverlay = useRef();
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [showChildren, setShowChildren] = useState(false);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (open) {
      modalWrapper.current.style.display = "flex";
      setShowChildren(true);
      setTimeout(() => {
        modalBox.current.style.transform = "scale(1)";
        modalOverlay.current.style.opacity = "1";
      }, 10);
    } else {
      modalBox.current.style.transform = "scale(0)";
      modalOverlay.current.style.opacity = "0";
      setTimeout(() => {
        modalWrapper.current.style.display = "none";
        setShowChildren(false);
      }, 400);
    }
    // eslint-disable-next-line
  }, [open]);

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section
      ref={modalWrapper}
      className="fixed h-full w-full top-0 left-0 hidden items-center justify-center z-[1001]"
    >
      <section
        ref={modalOverlay}
        onClick={onClose}
        className="absolute w-full h-full top-0 opacity-0 transition-all duration-300 left-0 backdrop-blur-sm z-[500] bg-[#4d4d4d7e]"
      ></section>
      <section
        ref={modalBox}
        className={`${px ? px : "px-[30px]"} ${py ? py : "py-[60px]"} h-auto   min-h-[100px] bg-white mx-auto z-[1000] max-w-[95%] rounded-[10px] scale-0 transition-all duration-300`}
        style={{ width: width ? width : 500 }}
      >
        <section
          onClick={onClose}
          className="absolute left-[9px] xl:left-4 top-[6px] xl:top-3 z-10 h-[1px] w-[11px] xl:w-[18px] cursor-pointer rounded-full  transition-all hover:bg-slate-200"
        >
          <Close
            fill="#434343"
            color="#434343"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            className="xl:hidden"
          />
          <Close
            fill="#434343"
            color="#434343"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="xl:block hidden"
          />
        </section>
        <h3 className="absolute top-4 right-6 text-blue">{title}</h3>
        {showChildren && <section>{children}</section>}
      </section>
    </section>
  );
}
