"use client";
import { MdCall, MdKey } from "react-icons/md";
import { IoIosLogIn, IoMdMail } from "react-icons/io";

import { Badge, Button, Input, Space } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const Navbar1 = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");


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
      <div>
        
      </div>
    </div>
  );
};

export default Navbar1;
