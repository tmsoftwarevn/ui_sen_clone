"use client";

import Navbar1 from "./Navbar1";
import { Button, Input, Space } from "antd";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import ResponsiveHeader from "./Responsive";
import clsx from 'clsx';
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 500) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearch = () => {
    console.log("vvvvv", searchValue);
    router.push(`/tim-kiem?text=${searchValue}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className={clsx(
      'fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out',
      isScrolled
        ? 'bg-white shadow-lg h-12'
        : 'bg-transparent h-16 text-white'
    )}>
      <div className="container">
        <div className="flex items-center justify-between">
          <div>fb</div>
          <div>
            <Image src="/logo.jpg" width={150} height={150} alt="fsd" />
          </div>
          <div className="">search</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
