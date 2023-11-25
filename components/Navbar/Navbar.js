import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar}>
        <div className={styles.nav_left}>
          <a href="#" className={styles.brand_select}>
            <span>brands</span>
            <FaChevronDown />
          </a>
          <a href="#" className={styles.shop_select}>
            <span>shop</span>
            <FaChevronDown />
          </a>
          <a href="#">premium</a>
          <a href="#">giftcard</a>
        </div>
        <div className={styles.nav_center}>
          <Image src="/assets/mainlogo.webp" alt="Logo" width={105} height={105} />
        </div>
        <div className={styles.nav_right}>
          <a href="#">become an affiliate</a>
          <a href="#">
            <FaTiktok />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <CgProfile />
          </a>
          <a href="#">
            <FaSearch />
          </a>
          <a href="#">
            <FiShoppingBag />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// const Navbar = () => {
//   return (
//     <>
//       <div className="bg-customYellow text-center py-2 font-bold uppercase">VISIT US ON TIKTOK @bravaland.com</div>
//       <div className="bg-customGray py-3 px-6 flex items-center justify-between">
//         <div className="flex items-center space-x-10 px-5 ">
//           <a href="#" className="text-white flex items-center">
//             <span className="mr-2">Brands</span>
//             <FaChevronDown />
//           </a>
//           <a href="#" className="text-white flex items-center">
//             <span className="mr-2">Shop</span>
//             <FaChevronDown />
//           </a>

//           <a href="#" className="text-white">
//             Premium
//           </a>
//           <a href="#" className="text-white">
//             Giftcard
//           </a>
//         </div>
//         <div>
//           <Image src="/assets/mainlogo.webp" alt="Logo" width={105} height={105} />
//         </div>

//         <div className="flex items-center space-x-8 px-8">
//           <a href="#" className="text-white ">
//             Become an Affiliate
//           </a>
//           <a href="#" className="text-white">
//             <FaTiktok />
//           </a>
//           <a href="#" className="text-white">
//             <FaTwitter />
//           </a>
//           <a href="#" className="text-white">
//             <FaInstagram />
//           </a>
//           <a href="#" className="text-white">
//             <CgProfile />
//           </a>
//           <a href="#" className="text-white">
//             <FaSearch />
//           </a>
//           <a href="#" className="text-white">
//             <FiShoppingBag />
//           </a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;
