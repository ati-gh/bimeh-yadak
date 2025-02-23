"use client";

import { useState } from "react";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ resultData, activeTab }) {
  function formatNumber(str) {
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  let numberStr = String(resultData.price);
  let price = formatNumber(numberStr);
  let [data, setData] = useState();
  return (
    <>
      <section
        className={`${activeTab === 3 ? "visible" : "hidden"} mb-4 text-sm w-full`}
      >
        <h2 className={` pt-4`}>
          <span className="w-2 h-2 rounded-full ml-1 bg-yellow-500 inline-block"></span>
          افت قیمت خودرو
        </h2>
        <section className="w-full bg-[#fcfcfc]  rounded-lg p-4 mt-4">
          <section className="flex w-full text-sm justify-between">
            <div className="">
              <span className="w-2 h-2 rounded-full ml-2 bg-gray-400 inline-block"></span>
              نوع خودرو
            </div>
            <div>
              {resultData.ordinaryCar ? resultData.ordinaryCar : "نامتعارف"}
            </div>
          </section>{" "}
          <section className="flex w-full text-sm mt-4 text-red justify-between">
            <div className="text-red">
              <span className="w-2 h-2 rounded-full ml-2 bg-gray-400 inline-block"></span>
              قیمت کل افت:
            </div>
            <div>{price}</div>
          </section>
        </section>
        <section className="w-full bg-[#fcfcfc] text-[#505050]  border-[2px] border-[#ffc114] rounded-lg p-4 mt-5">
          <span>نکته:</span>
          <p className=" text-xs leading-[27px] mt-4 rounded-lg bg-white text-justify p-4">
            {resultData.ruleDescription}
          </p>
        </section>
        <h2 className={` pt-4`}>
          <span className="w-2 h-2 rounded-full ml-1 bg-yellow-500 inline-block"></span>
          جزئیات افت قیمت بیمه ای
        </h2>
        <section className="w-full bg-[#fcfcfc]  rounded-lg p-4 mt-4">
          <section className="flex w-full text-sm justify-between">
            <div className="">عنوان</div>
            <div>مبلغ افت(تومان)</div>
            <div>شدت حادثه</div>
          </section>
        </section>

        {resultData.defectDetails &&
          resultData.defectDetails.map((item) => (
            <>
              <section className="w-full bg-[#fcfcfc]  rounded-lg p-4 mt-4">
                <section className="flex w-full text-sm justify-between">
                  <div className="">{item.parameter}</div>
                  <div>{item.defectedPrice}</div>
                  <div>{item.accidentCoefficientType}</div>
                </section>
              </section>
            </>
          ))}
        <section className="w-full bg-[#fcfcfc]  rounded-lg p-4 mt-4">
          <h3 className="text-center"> قیمت خودرو</h3>
          {/* <Image alt="" src={data.imageUrl} /> */}
        </section>
      </section>
    </>
  );
}
