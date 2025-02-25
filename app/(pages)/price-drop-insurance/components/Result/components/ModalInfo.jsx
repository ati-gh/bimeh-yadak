"use client";

import { Modal } from "@/common";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ resultData, open, setOpen }) {
  return (
    <>
      <Modal title="اطلاعات خودرو" open={open} onClose={() => setOpen(false)}>
        <section className="w-full   flex flex-col gap-2 p-4 mt-4">
          <section className="flex w-full text-sm justify-between">
            <div className="">
              <span className="w-2 h-2 rounded-full ml-2 bg-yellow-500 inline-block"></span>
              نوع خودرو
            </div>
            <div>{resultData.nickName}</div>
          </section>
          <section className="flex w-full text-sm mt-4  justify-between">
            <div className="">
              <span className="w-2 h-2 rounded-full ml-2 bg-yellow-500 inline-block"></span>
              سال ساخت
            </div>
            <div>{resultData.year}</div>
          </section>
          <section className="flex w-full text-sm mt-4  justify-between">
            <div className="">
              <span className="w-2 h-2 rounded-full ml-2 bg-yellow-500 inline-block"></span>
              کارکرد خودرو
            </div>
            <div>{"100"}</div>
          </section>
          <section className="flex w-full text-sm mt-4  justify-between">
            <div className="">
              <span className="w-2 h-2 rounded-full ml-2 bg-yellow-500 inline-block"></span>
              رنگ خودرو
            </div>
            <div>{resultData.colorName}</div>
          </section>
        </section>
      </Modal>
    </>
  );
}
