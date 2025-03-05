import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const PreNav = () => {
  return (
    <div className="flex justify-between items-center py-2">
      <div>
        <div className="flex gap-5 items-center">
          <div className="flex gap-2 items-center">
            <FaPhoneAlt size={12} className="text-white" />
            <p className="text-sm">065 867 6087</p>
          </div>
          <div className="flex gap-2 items-center">
            <MdEmail size={14} className="text-white" />
            <p className="text-sm">info@getfunds.com</p>
          </div>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <div className="flex gap-5 items-center">
          <Link
            href="https://www.linkedin.com/company/get-funds"
            target="_blank"
          >
            <FaLinkedinIn size={14} className="text-white" />
          </Link>
        </div>
        <div className="flex gap-5 items-center">
          <Link
            href="https://www.facebook.com/profile.php?id=100076242964543"
            target="_blank"
          >
            <FaFacebookF size={14} className="text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PreNav;
