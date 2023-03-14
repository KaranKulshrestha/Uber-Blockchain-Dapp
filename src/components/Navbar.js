import Image from "next/image";
import React, { useContext } from "react";
import avatar from "../temp/avatar.png";
import { BsPerson } from "react-icons/bs";
import { UberContext } from "@/context/uberContext";

const style = {
  wrapper: `h-16 w-full flex justify-between bg-black text-white md:justify-around items-center px-60 z-20`,
  leftMenu: `flex gap-3`,
  logo: `text-3xl text-white flex cursor-pointer mr-16`,
  menuItem: `text-lg text-white font-medium flex items-center mx-4 cursor-pointer`,
  rightMenu: `flex gap-3 items-center`,
  userImageContainer: `mr-2`,
  loginText: `flex ml-2`,
  loginButton: `flex items-center cursor-pointer`,
};

const Navbar = () => {
  const { currentAccount, connectWallet, currentUser} = useContext(UberContext);

  return (
    <div className={style.wrapper}>
      <div className={style.leftMenu}>
        <div className={style.logo}>Uber</div>
        <div className={style.menuItem}>Ride</div>
        <div className={style.menuItem}>Drive</div>
        <div className={style.menuItem}>More</div>
      </div>
      <div className={style.rightMenu}>
        <div className={style.menuItem}>Help</div>
        <div className={style.menuItem}>{currentUser.name?.split(' ')[0]}</div>
        <div className={style.userImageContainer}>
          <Image src={avatar} width={40} height={40} />
        </div>
        {currentAccount ? (
          <div>
            {currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
          </div>
        ) : (
          <div className={style.loginButton} onClick={() => connectWallet()}>
            <BsPerson />
            <span className={style.loginText}>log in</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
