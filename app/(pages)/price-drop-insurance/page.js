"use client";
import { useEffect, useState } from "react";
import CalculateBox from "./components/CalculateBox";
import DamageParts from "./components/DamageParts";
import Result from "./components/Result";
import Practice from "./components/Practice";
import { api } from "@/api";

import { useAxiosWithToken } from "@/hooks";
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
    details: [],
  });
  const [activeTab, setActivTab] = useState(1);
  const [resultData, setResultData] = useState([]);
  const [buttonLoading, setButtonLoading] = useState(false);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  const calculatePrice = () => {
    setButtonLoading(true);
    let params = calculateBox;
    useAxiosWithToken
      .post(api.car.calculatePrice, params)
      .then((res) => {
        setButtonLoading(false);
        console.log(res.data);
        setResultData(res.data);
        setActivTab(3);
      })
      .catch((err) => {
        setButtonLoading(false);
      });
  };
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className={`mt-20  mx-auto  max-w-[724px]  w-[95%]  `}>
        <CalculateBox
          setCalculateBox={setCalculateBox}
          calculateBox={calculateBox}
          setActivTab={setActivTab}
          activeTab={activeTab}
          buttonLoading={buttonLoading}
          setButtonLoading={setButtonLoading}
        />
        <DamageParts
          setButtonLoading={setButtonLoading}
          buttonLoading={buttonLoading}
          calculatePrice={calculatePrice}
          setCalculateBox={setCalculateBox}
          calculateBox={calculateBox}
          setActivTab={setActivTab}
          activeTab={activeTab}
        />
        <Result resultData={resultData} activeTab={activeTab} />
        <Practice />
      </section>
    </>
  );
}
