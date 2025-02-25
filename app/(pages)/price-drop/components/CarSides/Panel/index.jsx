"use client";
import {
  consoleLog_BlackGreen,
  consoleLog_BlackOrange,
  consoleLog_Blue,
} from "@/helper";
import { Checkbox } from "antd";
import React, { useState, useEffect, useRef } from "react";

export default function Index({
  depIds,
  left,
  top,
  title,
  colorOnChanged,
  damagedOnChanged,
  replaceOnChanged,
  coloredParts,
  replacedParts,
  damagedParts,
  partsOnchange,
  activeOptions,
}) {
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [showPanel, setShowPanel] = useState(false);
  const [isActive, setIsActive] = useState(false);

  // ─── Refs ───────────────────────────────────────────────────────────────────────
  const sidePanelBtnRef = useRef(null);
  const sidePanelRef = useRef(null);

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        sidePanelBtnRef.current &&
        !sidePanelBtnRef.current.contains(event.target) &&
        sidePanelRef.current &&
        !sidePanelRef.current.contains(event.target)
      ) {
        setShowPanel(false);
      }
    }
    // Add event listener
    document.addEventListener("click", handleClickOutside);
    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (
      coloredParts.includes(depIds?.color) ||
      damagedParts.includes(depIds?.damage) ||
      replacedParts.includes(depIds?.replace)
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coloredParts, damagedParts, replacedParts]);

  // ─── Render ─────────────────────────────────────────────────────────────────────
  return (
    <section
      className="absolute w-[243px] h-[300px] flex justify-center"
      style={{ left: left, top: top }}
    >
      <section
        className={`w-[35px] h-[35px] ${isActive ? "animate-[dotGlowRed_3s_ease-in-out_infinite]" : "animate-[dotGlowBlue_3s_ease-in-out_infinite]"}   flex justify-center items-center transition-all rounded-full`}
      >
        <button
          onClick={() => {
            if (!activeOptions) setShowPanel(!showPanel);
          }}
          ref={sidePanelBtnRef}
          className={`block w-[16px] h-[16px] m-auto ${
            isActive && !activeOptions
              ? "bg-[#E14856] hover:bg-[#E14856] "
              : activeOptions
                ? "bg-gray-100"
                : "bg-blue"
          } cursor-pointer rounded-full`}
        ></button>
      </section>
      <section
        ref={sidePanelRef}
        className={`${showPanel ? "block" : "hidden"} px-[16px] mt-[39px] py-[14px] backdrop-blur-sm bg-black/30  rounded-[10px] w-[243px] h-[190px] absolute z-20`}
      >
        <section className="flex flex-col h-[150px] justify-between">
          <span className="text-2xl font-bold text-[#CCE0F9]">{title}</span>
          {/* {items.map((item, index) => (<Checkbox onChange={(e) => onChange(e)} key={index} value={item.id}>
                        <span className='text-white'>{item.label}</span>
                    </Checkbox>))} */}
          <Checkbox
            onChange={(e) => partsOnchange(e, "replace")}
            value={depIds?.replace}
          >
            <span className="text-white">تعویض شده</span>
          </Checkbox>
          <Checkbox
            onChange={(e) => partsOnchange(e, "color")}
            value={depIds?.color}
          >
            <span className="text-white">رنگ شده</span>
          </Checkbox>
          <Checkbox
            onChange={(e) => partsOnchange(e, "damage")}
            value={depIds?.damage}
          >
            <span className="text-white">آسیب دیده</span>
          </Checkbox>
        </section>
      </section>
    </section>
  );
}
