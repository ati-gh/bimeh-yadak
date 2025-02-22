import { Select, Button, TextBox, Modal, Number } from "@/common";
import React, { useState, useContext, useEffect } from "react";
import { api } from "@/api";
import moment from "moment-jalaali";
import { useAxios, useAxiosWithToken } from "@/hooks";
import { usePriceDropStore } from "@/store/tools/pricedrop";
import { Checkbox } from "antd";
import MoadalDamaged from "./components/MoadalDamaged";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ setCalculateBox, activeTab, setActivTab }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  const [buttonLoading, setButtonLoading] = useState(false);
  const [depreciation, setDepreciation] = useState([]);
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState(null);
  // ─── Functions ──────────────────────────────────────────────────────────────────
  const closeModal = () => {
    setOpen(false);
  };
  const depreciationList = () => {
    setButtonLoading(true);
    useAxios
      .get(api.car.depreciation)
      .then((res) => {
        setButtonLoading(false);
        setDepreciation(res.data);
      })
      .catch((err) => {
        setButtonLoading(false);
      });
  };
  useEffect(() => {
    depreciationList();
  }, []);
  const handleItem = (item) => {
    setItem(item);
  };
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section>
        {open && (
          <MoadalDamaged item={item} open={open} closeModal={closeModal} />
        )}
        <section
          className={`${activeTab === 2 ? "visible" : "hidden"} mt-6 grid grid-cols-1 gap-8`}
        >
          <h2 className="mr-4">نقاط آسیب دیده</h2>
          {depreciation.map((item) => (
            <section
              onClick={() => {
                handleItem(item);

                setOpen(true);
              }}
              key={item.id}
              className="w-full h-auto bg-white flex items-center gap-4 p-4 rounded-lg "
            >
              <Checkbox />
              {item.parameter}
            </section>
          ))}
        </section>

        <section
          className={`${activeTab === 2 ? "visible" : "hidden"} flex justify-center gap-4`}
        >
          <Button loading={buttonLoading} className="mt-10 w-full text-xs">
            محاسبه افت قیمت بازار
          </Button>
          <Button
            loading={buttonLoading}
            className="mt-10 w-full text-xs"
            outlined
          >
            محاسبه افت قیمت بیمه
          </Button>
        </section>
      </section>
    </>
  );
}
