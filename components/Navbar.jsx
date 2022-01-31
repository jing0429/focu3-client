import ThemeBtn from "./ThemeBtn";
import { Disclosure } from "@headlessui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTheme } from "next-themes";
import {Context} from "../context";
import { useContext} from "react";
import { toast } from "react-toastify";


const Navbar = () => {
  //theme
  let {asPath}=useRouter();
  let {theme}=useTheme();
  let {state:{user},dispatch}=useContext(Context);
  let logout=()=>{
    toast("logout successfully")
    dispatch({
      type:"LOGOUT"
    })
  }
  //navbar
  
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
    { name: user?"logout":"login", href: "/login",handler:user?logout:""},
  ];
  
  const addClass = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };
  
  return (
    <Disclosure
      as="nav"
      className="dark:bg-gray-800 bg-green transition duration-200"
    >
      {({ open }) => (
        <>
          <div className=" mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center  h-16">
              {/* Mobile menu button*/}
              <div className="absolute inset-y-0 left-0 flex items-center  sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 focus:rind-white ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill={theme === "light" ? "black" : "white"}
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill={theme === "light" ? "black" : "white"}
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                {/* brand */}
                <h1 className=" block lg:hidden h-auto dark:text-white font-sans text-2xl transition duration-100">
                  F3
                </h1>
                <h1 className="text-2xl hidden lg:block h-auto  dark:text-white font-sans transition duration-100">
                  FOCU3
                </h1>
              </div>
              <div className="hidden sm:block sm:ml-6 ">
                <div className="flex space-x-4 items-center justify-center">
                  {navigation.map((item) => (
                    <Link  href={item.href}>
                      
                      <a
                        key={item.name}
                        onClick={item.handler}
                        className={addClass(
                          asPath===item.href
                            ? "bg-emerald-600 text-zinc-900 dark:bg-gray-900 dark:text-white  "
                            : " text-zinc-600  hover:bg-emerald-500 dark:text-gray-300 dark:hover:bg-gray-700 ",
                          "px-3 py-2 rounded-md text-sm font-medium dark:hover:text-white hover:text-black font-sans no-underline"
                        )}
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                  <ThemeBtn  />
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 flex flex-col">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={addClass(
                    asPath===item.href
                      ? "bg-emerald-600 text-zinc-900 dark:bg-gray-900 dark:text-white  "
                      : " text-zinc-600  hover:bg-emerald-700 dark:text-gray-300 dark:hover:bg-gray-700 ",
                    "px-3 py-2 rounded-md text-sm font-medium dark:hover:text-white hover:text-black"
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
