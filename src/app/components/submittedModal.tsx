import { useGlobalState } from "../../../libs/global_state";
import { redirect } from "next/navigation";
const SubmittedModal = () => {
  const { submitModalIsOpen, setSubmitModalIsOpen } = useGlobalState();
  return (
    <div className="w-screen h-screen z-20 absolute flex items-center justify-center p-4 shadow-md">
      <div className="bg-teal-600 flex flex-col items-center justify-center border-2 border-black p-2 text-center">
        <p className="text-sm">
          Thank you for submitting your details. We will reach out to you
          shortly.
        </p>
        <button
          onClick={() =>
            setTimeout(() => redirect("https://getfunds.co.za/"), 2000)
          }
          className=" bg-white border-2 border-black px-4 py-1 mt-3"
        >
          ok
        </button>
      </div>
    </div>
  );
};

export default SubmittedModal;
