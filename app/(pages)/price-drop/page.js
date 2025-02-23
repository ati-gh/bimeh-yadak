"use client";
import { useEffect, useState } from "react";
import SideSelector from "./components/SideSelector";
import Front from "./components/CarSides/Front";
import Back from "./components/CarSides/Back";
import Right from "./components/CarSides/Right";
import Left from "./components/CarSides/Left";
import SelectedPartView from "./components/SelectedPartView";
import CalculateBox from "./components/CalculateBox";
import Image from "next/image";
import { removeFromArray } from "@/helper";
import PriceDropDetail from "./components/price-drop-detail";
import { usePriceDropStore } from "@/store/tools/pricedrop";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const dep = [
    {
      id: 1,
      parameter: "گلگیر جلو سمت راست",
      autoDepreciationTypeEnum: "COLORED_PART",
    },
    {
      id: 2,
      parameter: "گلگیر عقب سمت راست",
      autoDepreciationTypeEnum: "COLORED_PART",
    },
    {
      id: 3,
      parameter: "درب جلو سمت راست",
      autoDepreciationTypeEnum: "COLORED_PART",
    },
    {
      id: 4,
      parameter: "درب عقب سمت راست",
      autoDepreciationTypeEnum: "COLORED_PART",
    },
    {
      id: 5,
      parameter: "کاپوت",
      autoDepreciationTypeEnum: "COLORED_PART",
    },
    {
      id: 6,
      parameter: "سقف",
      autoDepreciationTypeEnum: "COLORED_PART",
    },
    {
      id: 7,
      parameter: "صندوق",
      autoDepreciationTypeEnum: "COLORED_PART",
    },
    {
      id: 29,
      parameter: "گلگیر جلو سمت چپ",
      autoDepreciationTypeEnum: "COLORED_PART",
    },
    {
      id: 30,
      parameter: "گلگیر عقب سمت چپ",
      autoDepreciationTypeEnum: "COLORED_PART",
    },
    {
      id: 31,
      parameter: "درب جلو سمت چپ",
      autoDepreciationTypeEnum: "COLORED_PART",
    },
    {
      id: 32,
      parameter: "درب عقب سمت چپ",
      autoDepreciationTypeEnum: "COLORED_PART",
    },
    {
      id: 18,
      parameter: "گلگیر جلو سمت راست",
      autoDepreciationTypeEnum: "REPLACED_PART",
    },
    {
      id: 19,
      parameter: "گلگیر عقب سمت راست",
      autoDepreciationTypeEnum: "REPLACED_PART",
    },
    {
      id: 20,
      parameter: "درب جلو سمت راست",
      autoDepreciationTypeEnum: "REPLACED_PART",
    },
    {
      id: 21,
      parameter: "درب عقب سمت راست",
      autoDepreciationTypeEnum: "REPLACED_PART",
    },
    {
      id: 22,
      parameter: "کاپوت",
      autoDepreciationTypeEnum: "REPLACED_PART",
    },
    {
      id: 23,
      parameter: "سقف",
      autoDepreciationTypeEnum: "REPLACED_PART",
    },
    {
      id: 24,
      parameter: "صندوق",
      autoDepreciationTypeEnum: "REPLACED_PART",
    },
    {
      id: 25,
      parameter: "گلگیر جلو سمت چپ",
      autoDepreciationTypeEnum: "REPLACED_PART",
    },
    {
      id: 26,
      parameter: "گلگیر عقب سمت چپ",
      autoDepreciationTypeEnum: "REPLACED_PART",
    },
    {
      id: 27,
      parameter: "درب جلو سمت چپ",
      autoDepreciationTypeEnum: "REPLACED_PART",
    },
    {
      id: 28,
      parameter: "درب عقب سمت چپ",
      autoDepreciationTypeEnum: "REPLACED_PART",
    },
    ///////////////////////////////////////////////////////////////not found in data base
    {
      id: 40,
      parameter: "شاسی جلو راست",
      autoDepreciationTypeEnum: "COLORED_PART",
    },
    {
      id: 50,
      parameter: "شاسی جلو راست",
      autoDepreciationTypeEnum: "REPLACED_PART",
    },
    {
      id: 4050,
      parameter: "شاسی جلو راست",
      autoDepreciationTypeEnum: "DAMAGED_PART",
    },
    {
      id: 41,
      parameter: "شاسی جلو چپ",
      autoDepreciationTypeEnum: "COLORED_PART",
    },
    {
      id: 51,
      parameter: "شاسی جلو چپ",
      autoDepreciationTypeEnum: "REPLACED_PART",
    },
    {
      id: 4151,
      parameter: "شاسی جلو چپ",
      autoDepreciationTypeEnum: "DAMAGED_PART",
    },
    {
      id: 623,
      parameter: "سقف",
      autoDepreciationTypeEnum: "DAMAGED_PART",
    },
    {
      id: 522,
      parameter: "کاپوت",
      autoDepreciationTypeEnum: "DAMAGED_PART",
    },
  ];
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [activeSide, setActiveSide] = useState(1);

  const [resultPanelShow, setResultPanelShow] = useState(false);
  const resultData = usePriceDropStore((state) => state.resultData);
  const coloredParts = usePriceDropStore((state) => state.coloredParts);
  const damagedParts = usePriceDropStore((state) => state.damagedParts);
  const replacedParts = usePriceDropStore((state) => state.replacedParts);
  const updateResultData = usePriceDropStore((state) => state.updateResultData);
  const updateColoredParts = usePriceDropStore(
    (state) => state.updateColoredParts
  );
  const updateDamagedParts = usePriceDropStore(
    (state) => state.updateDamagedParts
  );
  const updateReplacedParts = usePriceDropStore(
    (state) => state.updateReplacedParts
  );
  // ─── Functions ──────────────────────────────────────────────────────────────────
  const partsOnchange = (e, type) => {
    if (type === "color") {
      let parts = [];
      parts = [...coloredParts];
      if (e.target.checked === true) {
        parts.push(e.target.value);
      } else {
        parts = removeFromArray(parts, e.target.value);
      }
      updateColoredParts(parts);
    } else if (type === "replace") {
      let parts = [];
      parts = [...replacedParts];
      if (e.target.checked === true) {
        parts.push(e.target.value);
      } else {
        parts = removeFromArray(parts, e.target.value);
      }
      updateReplacedParts(parts);
    } else if (type === "damage") {
      let parts = [];
      parts = [...damagedParts];
      if (e.target.checked === true) {
        parts.push(e.target.value);
      } else {
        parts = removeFromArray(parts, e.target.value);
      }
      updateDamagedParts(parts);
    }
  };
  const showResultPanel = () => {
    setResultPanelShow(true);
  };
  const hideResultPanel = () => {
    setResultPanelShow(false);
    updateResultData({});
  };

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section
        className={`h-[200px] ${!resultPanelShow ? "block" : "hidden"} bg-[#F6F6FB] w-full relative min-h-[1053px] pt-[58px] mt-[78px]`}
      >
        <Image
          src="/assets/svg/price-drop-vec1.svg"
          alt=""
          className="absolute top-[-100px] "
          width={935}
          height={1022}
        />
        <Image
          src="/assets/svg/price-drop-vec2.svg"
          alt=""
          className="absolute bottom-[0] left-[-60px]"
          width={935}
          height={1022}
        />
        <section className="w-[1171px] max-w-full h-[400px] m-auto z-40 relative">
          <h1 className="text-[#191919] m-auto text-[28px] font-semibold text-center">
            محاسبه افت قیمت خودرو
          </h1>
          <p className="w-[652px] max-w-full text-center m-auto text-lg font-normal mt-[24px]">
            شما می‌توانید محل دقیق آسیب خودرو را با کلیک روی نقاط آبی و پر کردن
            موارد زیر آن مشخص کنید تا بعد از تکمیل اطلاعات ، افت قیمت ماشین شما
            محاسبه شود.
          </p>
          <section className="flex justify-between mt-[61px]">
            <section className="w-[221px] h-[498px]">
              <SelectedPartView depList={dep} />
            </section>
            <section className="w-[689px] h-[468px] flex justify-center items-center">
              <Front activeSide={activeSide} partsOnchange={partsOnchange} />
              <Back activeSide={activeSide} partsOnchange={partsOnchange} />
              <Right activeSide={activeSide} partsOnchange={partsOnchange} />
              <Left activeSide={activeSide} partsOnchange={partsOnchange} />
            </section>
            <section className="w-[221px] h-[520px] flex flex-col justify-between">
              <SideSelector
                activeSide={activeSide}
                setActiveSide={setActiveSide}
              />
            </section>
          </section>
          <CalculateBox
            showResultPanel={showResultPanel}
            coloredParts={coloredParts}
            replacedParts={replacedParts}
          />
        </section>
      </section>

      <section className={`${resultPanelShow ? "block" : "hidden"}`}>
        <PriceDropDetail hideResultPanel={hideResultPanel} />
      </section>
    </>
  );
}
