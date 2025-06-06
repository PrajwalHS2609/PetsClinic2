"use client"; // Add this at the top to mark the file as a Client Component

import { usePathname } from "next/navigation"; // Importing usePathname for Client Components
import Link from "next/link";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import { HiMiniXMark } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useRef, useState } from "react";
import Button from "../Button/Button";

const Menu = () => {
  const pathname = usePathname();
  const [drop, setDrop] = useState(false);
  const dropRef = useRef<HTMLDivElement | null>(null); // Explicitly typed ref
  // const dropRef2 = useRef<HTMLDivElement | null>(null); // Explicitly typed ref

  // const handlePopUp = () => {};
  const hideSideBar = () => {
    const exit = document.querySelector(".exit") as HTMLElement;
    const sideBar = document.querySelector(".resp-Menu") as HTMLElement;
    // sideBar.style.height = "0%";
    sideBar.style.visibility = "hidden";
    sideBar.style.opacity = "0";
    sideBar.style.transform = "translateX(100%)";
    exit.style.display = "none";
  };
  const showSideBar = () => {
    const exit = document.querySelector(".exit") as HTMLElement;
    const sideBar = document.querySelector(".resp-Menu") as HTMLElement;
    // sideBar.style.height = "fit-content";
    sideBar.style.visibility = "visible";
    sideBar.style.opacity = "1";
    sideBar.style.transform = "translateX(0px)";
    exit.style.display = "block";
  };
  const handleDrop = () => {
    const plus = document.querySelector(".plus") as HTMLElement | null;

    // Ensure dropRef.current is not null
    if (dropRef.current) {
      if (!drop) {
        setDrop(true);
        dropRef.current.style.display = "flex"; // Safe to access
        if (plus) {
          plus.style.transform = "rotate(45deg)";
        }
      } else {
        setDrop(false);
        dropRef.current.style.display = "none"; // Safe to access
        if (plus) {
          plus.style.transform = "rotate(0)";
        }
      }
    } else {
      console.error("dropRef is null or not attached to an element");
    }
  };
  // const handleDrop2 = () => {
  //   const plus = document.querySelector(".plus") as HTMLElement | null;
  //   // Ensure dropRef.current is not null
  //   if (dropRef2.current) {
  //     if (!drop) {
  //       setDrop(true);
  //       dropRef2.current.style.display = "flex"; // Safe to access
  //       if (plus) {
  //         plus.style.transform = "rotate(45deg)";
  //       }
  //     } else {
  //       setDrop(false);
  //       dropRef2.current.style.display = "none"; // Safe to access
  //       if (plus) {
  //         plus.style.transform = "rotate(0)";
  //       }
  //     }
  //   } else {
  //     console.error("dropRef is null or not attached to an element");
  //   }
  // };

  
  // const handleAppointment = () => {
  //   const bookPopUpElement = document.querySelector(".book-container");
  //   const sideBar = document.querySelector(".resp-Menu") as HTMLElement;
  //   sideBar.style.visibility = "visible";
  //   sideBar.style.opacity = "1";
  //   sideBar.style.transform = "translateX(0px)";
  //   if (bookPopUpElement) {
  //     (bookPopUpElement as HTMLElement).style.visibility = "visible";
  //   } else {
  //     console.warn("Element with class 'bookPopUp' not found");
  //   }
  // };

  const services = [
    {
      id: "1",
      pathName: "/pets-boarding-in-bangalore",
      menu: "Boarding",
    },
    {
      id: "2",
      pathName: "/pets-training-in-bangalore",
      menu: "Training",
    },
    {
      id: "3",
      pathName: "/pets-clinic-in-bangalore",
      menu: "Care",
    },
    {
      id: "4",
      pathName: "/dog-walkers-in-bangalore",
      menu: "Dog Walker",
    },
    {
      id: "5",
      pathName: "/pets-grooming-in-bangalore",
      menu: "Grooming",
    },
    {
      id: "6",
      pathName: "/pets-food-in-bangalore",
      menu: "Health Food",
    },
  ];

  return (
    <div className="menu-container">
      <div className="menu-content1">
        <li>
          <Link href="/" className={pathname === "/" ? "active" : ""}>
            HOME
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className={pathname === "/services" ? "active" : ""}
          >
            OUR SERVICES
            <MdKeyboardArrowDown className="serviceIco" />
          </Link>
          <div className="menuDrop-container">
            <ul>
              {services.map((x) => (
                <li key={x.id}>
                  <Link
                    href={x.pathName}
                    className={pathname === x.pathName ? "active" : ""}
                  >
                    {x.menu}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li>
          <Link
            href="/about-us"
            className={pathname === "/about-us" ? "active" : ""}
          >
            ABOUT US{" "}
          </Link>
        </li>
        <li>
          <Link
            href="/contact-us"
            className={pathname === "/contact-us" ? "active" : ""}
          >
            CONTACT US{" "}
          </Link>
        </li>
        <li>
          <Link href="/blog" className={pathname === "/blog" ? "active" : ""}>
            BLOG{" "}
          </Link>
        </li>

        <li>
          <Button text="Appointment" link="/" />
        </li>
      </div>
      {/* -----------------------respMenu------------------------------- */}
      <div className="menu-content2">
        <HiOutlineMenuAlt2 className="menuIcon" onClick={showSideBar} />
        <div className="resp-Menu">
          <div className="inner-RespMenu">
            <li>
              <div className="inner-RespMenuHead">
                {/* <Image src={logo} alt="logo" className="respIcon" /> */}
                <HiMiniXMark
                  className="innerResp-MenuHeadIco"
                  onClick={hideSideBar}
                />
              </div>{" "}
              <Link
                href="/"
                className={pathname === "/" ? "active" : ""}
                onClick={hideSideBar}
              >
                HOME
              </Link>
            </li>
            <li>
              <div className="respMenuList">
                <Link
                  href="/services"
                  className={pathname === "/services" ? "active" : ""}
                  onClick={hideSideBar}
                >
                  SERVICES{" "}
                </Link>
                <span>
                  <AiOutlinePlus className="plus" onClick={handleDrop} />
                </span>
              </div>
              {/* ---------------------------respDropDown-------------------------------------------- */}
              <div className="respDrop" ref={dropRef}>
                <ul>
                  {services.map((x) => (
                    <li key={x.id}>
                      <Link
                        href={x.pathName}
                        className={pathname === x.pathName ? "active" : ""}
                        onClick={hideSideBar}
                      >
                        {x.menu}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li>
              {" "}
              <Link
                href="/about-us"
                className={pathname === "/about-us" ? "active" : ""}
                onClick={hideSideBar}
              >
                ABOUT US
              </Link>
            </li>

            <li>
              {" "}
              <Link
                href="/blog"
                className={pathname === "/blog" ? "active" : ""}
                onClick={hideSideBar}
              >
                BLOG
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="/contact-us"
                className={pathname === "/contact-us" ? "active" : ""}
                onClick={hideSideBar}
              >
                CONTACT US{" "}
              </Link>
            </li>
            <li className="menuContainerBtn-Container">
              <div className="menuContainerBtn">
                <Button text="Appointment" link="/" />
              </div>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
