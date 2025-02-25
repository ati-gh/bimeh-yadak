import { Select, Button, TextBox, Modal, Number } from "@/common";
import React, { useState, useContext, useEffect } from "react";
import { api } from "@/api";
import moment from "moment-jalaali";
import { useAxios, useAxiosWithToken } from "@/hooks";
import { usePriceDropStore } from "@/store/tools/pricedrop";
import { Checkbox, Radio } from "antd";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({
  closeModal,
  open,
  item,
  handleSelection,
  selectedOption,
  handleConfirm,
}) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <Modal
        title={item.parameter}
        px="px-6"
        py="py-8"
        open={open}
        onClose={closeModal}
      >
        <section className="flex flex-col gap-4 mt-8">
          {[
            {
              label: "عدم نیاز به صافکاری (جزئی)",
              accidentCoefficient: "MINOR",
            },
            {
              label: "نیاز به صافکاری (متوسط)",
              accidentCoefficient: "MAJOR",
            },
            { label: "تعویض (شدید)", accidentCoefficient: "EXTREME" },
          ].map(({ label, accidentCoefficient }, index) => (
            <section key={index}>
              <Radio
                value={accidentCoefficient} // مقدار رادیو
                checked={
                  selectedOption?.accidentCoefficient === accidentCoefficient
                }
                onChange={() => {
                  handleSelection(item.id, accidentCoefficient);
                }}
              >
                {label}
              </Radio>
            </section>
          ))}
          <Button
            onClick={() => {
              handleConfirm();
              closeModal();
            }}
            className="mt-4"
          >
            تایید
          </Button>
        </section>
      </Modal>
    </>
  );
}
