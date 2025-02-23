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

export default function Index({
  setCalculateBox,
  activeTab,
  calculatePrice,
  buttonLoading,
  setButtonLoading,
  calculateBox,
}) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  const [depreciation, setDepreciation] = useState([]);
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState(null);
  const [selectedDamages, setSelectedDamages] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isBodyReplaced, setIsBodyReplaced] = useState(false);

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

  const handleSelection = (defectedPartId, accidentCoefficient) => {
    setSelectedOption({ defectedPartId, accidentCoefficient });
  };
  const handleConfirm = () => {
    if (selectedOption) {
      setSelectedDamages((prev) => {
        if (
          prev.find(
            (damage) => damage.defectedPartId === selectedOption.defectedPartId
          )
        ) {
          return prev;
        }
        return [...prev, selectedOption];
      });
    }
  };
  useEffect(() => {
    if (calculateBox.details && calculateBox.details.length > 0) {
      calculatePrice();
    }
  }, [calculateBox]);

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className=" ">
        {open && (
          <MoadalDamaged
            handleSelection={handleSelection}
            selectedOption={selectedOption}
            item={item}
            open={open}
            closeModal={closeModal}
            handleConfirm={handleConfirm}
          />
        )}
        <section
          className={`${activeTab === 2 ? "visible" : "hidden"} mt-6 bg-[#fcfcfc]  p-4 rounded-lg grid grid-cols-1 gap-8`}
        >
          <h2 className="mr-4">نقاط آسیب دیده</h2>
          {depreciation.map((item) => (
            <section
              onClick={() => {
                if (item.parameter.includes("اتاق خودرو (تعویض)")) {
                  setIsBodyReplaced(true);
                } else {
                  setIsBodyReplaced(false);
                }
                if (!item.parameter.includes("تعویض")) {
                  setItem(item);
                  setOpen(true);
                }
                if (item.parameter.includes("تعویض")) {
                  setSelectedDamages((prev) => [
                    ...prev,
                    { defectedPartId: item.id, accidentCoefficient: "EXTREME" },
                  ]);
                }
              }}
              key={item.id}
              className="w-full h-auto bg-white flex items-center gap-4 p-4 rounded-lg "
            >
              <Checkbox
                checked={selectedDamages.some(
                  (damage) => damage.defectedPartId === item.id
                )}
                // disabled={isBodyReplaced ? isBodyReplaced : false}
                onChange={(e) => {
                  if (!e.target.checked) {
                    setSelectedDamages((prev) =>
                      prev.filter((damage) => damage.defectedPartId !== item.id)
                    );
                  }
                  console.log(isBodyReplaced);
                }}
              />
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
            onClick={() => {
              const newDetails = [...selectedDamages];
              setCalculateBox((prev) => ({
                ...prev,
                details: newDetails,
              }));
              calculatePrice();
            }}
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
