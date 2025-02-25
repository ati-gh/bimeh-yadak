import React, { useState, useContext, useEffect } from "react";
import ListItem from "./components/ListItem";
import { usePriceDropStore } from "@/store/tools/pricedrop";
import { Button } from "@/common";
import { Checkbox } from "antd";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
export default function Index({
  depList,
  activeOptions,
  handleOnChangeDeactive,
}) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const coloredParts = usePriceDropStore((state) => state.coloredParts);
  const damagedParts = usePriceDropStore((state) => state.damagedParts);
  const replacedParts = usePriceDropStore((state) => state.replacedParts);
  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    console.log(activeOptions);
  }, [activeOptions]);
  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section className="w-full h-[498px] overflow-auto">
      <span className="text-[20px] block text-blue font-bold mb-[32px]">
        موارد انتخاب شده:
      </span>
      <label className="mb-2">
        <Checkbox checked={activeOptions} onChange={handleOnChangeDeactive} />
        اتاق تعویض
      </label>
      {coloredParts.map((item, index) => (
        <ListItem key={index}>
          {depList.find((element) => element.id === item)?.parameter}{" "}
          <span className="text-xs text-blue">(رنگ شده)</span>
        </ListItem>
      ))}
      {replacedParts.map((item, index) => (
        <ListItem key={index}>
          {depList.find((element) => element.id === item)?.parameter}{" "}
          <span className="text-xs text-green-600">(تعویض شده)</span>
        </ListItem>
      ))}
      {damagedParts.map((item, index) => (
        <ListItem key={index}>
          {depList.find((element) => element.id === item)?.parameter}{" "}
          <span className="text-xs text-red">(آسیب دیده)</span>
        </ListItem>
      ))}
    </section>
  );
}
