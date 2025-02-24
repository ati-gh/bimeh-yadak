"use client";

import { Checkbox } from "antd";
import { useState } from "react";

export default function Index() {
  // وضعیت چک‌باکس aaaa
  const [checkedA, setCheckedA] = useState(false);
  // وضعیت چک‌باکس bbbb
  const [checkedB, setCheckedB] = useState(false);
  // وضعیت غیرفعال بودن چک‌باکس bbbb
  const [disabledB, setDisabledB] = useState(false);

  // تابعی که وقتی روی aaaa کلیک می‌شود اجرا می‌شود
  const handleACheckbox = () => {
    setCheckedA(!checkedA);
    // زمانی که روی aaaa کلیک می‌شود، bbbb کاملاً غیرفعال می‌شود
    setDisabledB(!checkedA);
  };

  const handleBCheckbox = () => {
    if (!disabledB) {
      setCheckedB(!checkedB);
    }
  };

  return (
    <section className="mt-20 mx-auto max-w-[724px] w-[95%]">
      <section onClick={handleBCheckbox} className="w-full border p-2">
        <Checkbox
          checked={checkedB}
          onChange={handleBCheckbox}
          disabled={disabledB}
        />
        bbbb
      </section>
      <section onClick={handleACheckbox} className="w-full border p-2 mt-4">
        <Checkbox checked={checkedA} onChange={handleACheckbox} />
        aaaa
      </section>
    </section>
  );
}

// "use client";

// import { Checkbox } from "antd";
// import { useState } from "react";

// export default function Index() {
//   const [checkedA, setCheckedA] = useState(false);
//   const [checkedB, setCheckedB] = useState(false);
//   const [disabledB, setDisabledB] = useState(false);

//   const handleACheckbox = () => {
//     const newCheckedA = !checkedA;
//     setCheckedA(newCheckedA);
//     setDisabledB(newCheckedA);
//   };

//   const handleBCheckbox = () => {
//     setCheckedB(!checkedB);
//   };

//   return (
//     <section className="mt-20 mx-auto max-w-[724px] w-[95%]">
//       <section className="w-full border p-2">
//         <Checkbox
//           checked={checkedB}
//           onChange={handleBCheckbox}
//           disabled={disabledB}
//         />
//         bbbb
//       </section>
//       <section className="w-full border p-2 mt-4">
//         <Checkbox
//           checked={checkedA}
//           onChange={handleACheckbox}
//         />
//         aaaa
//       </section>
//     </section>
//   );
// }
