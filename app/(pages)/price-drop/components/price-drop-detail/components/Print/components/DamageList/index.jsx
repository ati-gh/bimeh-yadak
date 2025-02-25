import { usePriceDropStore } from "@/store/tools/pricedrop";
import { useEffect } from "react";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const resultData = usePriceDropStore((state) => state.resultData);
  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────
  useEffect(() => {
    console.log(resultData);
  }, []);

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section className="w-full flex flex-wrap p-2 gap-1 mt-[20px]">
      {resultData?.defectDetails?.map((item, index) => (
        <section
          key={index}
          className="border text-[11px] p-1 rounded-md flex gap-1"
        >
          <span className="font-bold">{item.info}</span>
          <span className="font-bold"> {item.parameter}</span>
          <span>{item.percent}%</span>
        </section>
      ))}
    </section>
  );
}
