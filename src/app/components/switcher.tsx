import { useState } from "react";
import { useGlobalState } from "../../../libs/global_state";
const Switcher = () => {
  const [toggle, setToggle] = useState(false);
  const { setFrequency } = useGlobalState();

  return (
    <div className="flex flex-row items-center justify-center pt-2 md:pt-5">
      <span className="text-center mt-5">&nbsp;</span>
      <button
        disabled={toggle}
        onClick={() => {
          setToggle(!toggle);
          setFrequency("weekly");
        }}
        className={` font-bold py-2 md:py-1 w-40 ${
          toggle
            ? "bg-[#1E394C] text-white border-[#1E394C] border-1"
            : "bg-white bg-opacity-40 text-black border border-[#1E394C]"
        }  rounded-l-md`}
      >
        <p className=" text-sm">Weekly</p>
        <p className=" text-xs hidden md:block">4 Times Monthly</p>
      </button>
      <button
        disabled={!toggle}
        onClick={() => {
          setToggle(!toggle);
          setFrequency("daily");
        }}
        className={` font-bold py-2 md:py-1 w-40 ${
          toggle
            ? "bg-white bg-opacity-40 text-black border border-[#1E394C]"
            : "bg-[#1E394C] text-white border-[#1E394C] border-1"
        }  rounded-r-md`}
      >
        <p className=" text-sm">Daily</p>
        <p className=" text-xs hidden md:block">Mon - Sat</p>
      </button>
    </div>
  );
};

export default Switcher;
