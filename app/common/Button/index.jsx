"use client";
import "./style.css";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
export default function Index({
  children,
  type,
  dark,
  className,
  loading,
  outlined,
  disabled,
  onClick,
  ...rest
}) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const getColor = () => {
    if (outlined) {
      if (type === "primary") {
        return "text-black border-[2px] border border-primary";
      } else if (type === "danger") {
        return "text-red border-[2px] border border-red";
      } else {
        return "text-primary border-[2px] border border-primary";
      }
    } else {
      if (type === "primary") {
        return "bg-primary text-white";
      } else if (type === "danger") {
        return "bg-red text-white";
      } else {
        return "bg-primary text-white";
      }
    }
  };
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <button
      {...rest}
      disabled={loading || disabled}
      onClick={onClick}
      className={`relative flex h-12 ${loading && "pl-10"} items-center justify-center rounded-[10px] ${dark ? "border border-[gray]  bg-[#ffffff1a] text-white" : getColor()} px-5 transition-all duration-700 disabled:opacity-50 ${className}`}
    >
      {children}
      <div className={`btnLoader  ${loading ? "opacity-1" : "opacity-0"}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </button>
  );
}
