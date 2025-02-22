"use client";
import { useEffect, useState } from "react";
import CalculateBox from "./components/CalculateBox";
import DamageParts from "./components/DamageParts";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  const [calculateBox, setCalculateBox] = useState({
    carId: "",
    colorId: "",
    kilometer: "",
  });
  const [activeTab, setActivTab] = useState(1);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    console.log(calculateBox);
  }, [calculateBox]);
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section
        className={`h-auto mx-auto mt-20 p-4 rounded-lg bg-[#fcfcfc] w-[90%]  `}
      >
        <CalculateBox
          setCalculateBox={setCalculateBox}
          calculateBox={calculateBox}
          setActivTab={setActivTab}
          activeTab={activeTab}
        />
        <DamageParts
          setCalculateBox={setCalculateBox}
          calculateBox={calculateBox}
          setActivTab={setActivTab}
          activeTab={activeTab}
        />
      </section>
    </>
  );
}
