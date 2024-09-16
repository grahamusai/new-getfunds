import { useGlobalState } from "../../../libs/global_state";
const Modal = () => {
  const { setIsModalOpen, modalErrorMessage } = useGlobalState();
  return (
    <div className="z-50 w-screen h-screen absolute flex items-center justify-center shadow-">
      <div className=" h-32 w-60 rounded-md text-white bg-gray-700 flex flex-col items-center justify-center border-2 glowing-border p-2 text-center">
        <p className="uppercase">{modalErrorMessage}</p>
        <button
          onClick={() => setIsModalOpen(false)}
          className=" bg-gray-800 text-gray-400 border-2 border-gray-600 hover:bg-gray-700 px-8 py-2 rounded-full  mt-3"
        >
          ok
        </button>
      </div>
    </div>
  );
};

export default Modal;
