import { CgSpinner } from "react-icons/cg";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center">
      <CgSpinner className="animate-spin text-blue-500 text-4xl" />
    </div>
  );
};


export default Spinner