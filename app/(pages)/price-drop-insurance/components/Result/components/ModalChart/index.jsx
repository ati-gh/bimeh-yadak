"use client";

import { Modal } from "@/common";
import Chart from "./components/Chart";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({
  resultData,
  openChart,
  setOpenChart,
  chartMonthList,
  chartPriceList,
}) {
  return (
    <>
      <Modal
        width={500}
        title="اطلاعات خودرو"
        open={openChart}
        onClose={() => setOpenChart(false)}
      >
        <Chart
          chartPriceList={chartPriceList}
          chartMonthList={chartMonthList}
        />
      </Modal>
    </>
  );
}
