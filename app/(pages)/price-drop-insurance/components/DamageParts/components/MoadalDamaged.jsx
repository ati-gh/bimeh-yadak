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

export default function Index({ closeModal, open, item }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────
  useEffect(() => {
    console.log(item);
  }, [open]);
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
          <section>
            <Radio label="عدم نیاز به صافکاری (جزِیی)">
              عدم نیاز به صافکاری (جزیی)
            </Radio>
          </section>
          <section>
            <Radio label=" نیاز به صافکاری (متوسط)">
              نیاز به صافکاری (متوسط)
            </Radio>
          </section>
          <section>
            <Radio label="تعویض (شدید)">تعویض (شدید) </Radio>
          </section>
          <Button
            onClick={() => {
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
