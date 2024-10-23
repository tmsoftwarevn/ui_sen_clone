"use client";

import Navbar1 from "./Navbar1";
import { Button, Input, Space } from "antd";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import ResponsiveHeader from "./Responsive";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [dropdown, setDropdown] = useState([
    { name: "khóa marketing", slug: "slug" },
  ]);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {}, []);

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
    <div>
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
