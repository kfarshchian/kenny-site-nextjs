import Image from "next/image";
import Link from "next/link";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./navbar.scss";
import MobileNav from "./MobileNav";
import "./mobileNav.scss";
import LocalLender from "../public/smalllogokenny.png"
import HTMortgageLogo from "../public/HTMortgageLogo.png"


const Navbar = () => {
  return (
    <>
      <div id="MainNav">
        <nav className="w-full bg-white fixed top-0 left-0 right-0 z-10">
          <div className="justify-between px-4lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
              <div id="logoContainer" className="flex items-center justify-between py-3 md:block">
                {/* LOGO */}
                <Link title="Kenny Farshchian W/The Hometown Mortgage Co.." href="/" target="_blank">
                  <Image            
                    id="kennyLogo"
                    src= {LocalLender}
                    priority
                    alt="Kenny Farshchian Logo The Hometown Mortgage Co"
                  />
                </Link>
                {/* The Hometown Mortgage Co logo */}
                <Link title="apply The Hometown Mortgage Co" target="_blank" href="https://thehtmortgage.my1003app.com?time=1728535279914" >
                  <Image
                    id="The-Hometown-Mortgage-Co"
                    src= {HTMortgageLogo}
                    alt="Kenny Farshchian Logo The Hometown Mortgage Co"
                  />
                </Link>
                {/* HAMBURGER BUTTON FOR MOBILE */}
                <div className="md:hidden">
                </div>
              </div>
            </div>
            <div>
              <div
                className={
                  "flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0"
                }
              >
                <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                  <li className="pb-2 text-xl text-black py-2 px-2 text-center  border-b-2 md:border-b-0  hover:bg-slate-600  border-black-900  md:hover:bg-transparent">
                    <Link title="Kenny Farshchian W/The Hometown Mortgage Co." className="home" id="main-link" href="/">
                      Home
                    </Link>
                  </li>
                  <ul className="pb-2 text-xl text-black py-2 md:px-2 text-center border-b-2 md:border-b-0   border-black-900   md:hover:bg-transparent">
                    <li className="dropdown">
                      <p>
                        About Us <ArrowDropDownIcon />
                      </p>
                      <ul className="dropdown-content">
                        <li>
                          <Link title="Aboutus" href="/aboutus">About Us</Link>
                        </li>
                        <li>
                          <Link title="Our Process" href="/our-process">Our Process</Link>
                        </li>
                        <li>
                        </li>
                        <li>
                          <Link title="Blog" href="/Blog">Blog</Link>
                        </li>
                        <li>
                          <Link title="Contact" href="/contact">Contact Us</Link>
                        </li>
                        <li>
                          <Link title="Loans" href="/Loans">Loans</Link>
                        </li>
                        <li>
                          <Link title="Reviews" href="/Reviews">Reviews</Link>
                        </li>
                        <li>
                          <Link title="Mortgage-Calculator-Utah" href="/Mortgage-Calculator-Utah">Mortgage Calculator Utah</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="pb-2 text-xl text-black py-2 px-2 text-center  border-b-2 md:border-b-0  hover:bg-slate-600  border-black-900  md:hover:bg-transparent">
                    <li className="dropdown">
                      <p>
                        Utah
                        <ArrowDropDownIcon />
                      </p>
                      <ul className="dropdown-content">
                        <li>
                          <a title="Utah Mortgage Salt Lake City" href="/Utah-mortgage-salt-lake-city">
                            Salt Lake City
                          </a>
                        </li>
                        <li>
                          <a title="Utah Mortgage  Layton" href="/Utah-mortgage-Layton">Layton</a>
                        </li>
                        <li>
                          <a title="Utah Mortgage  Bountiful" href="/Utah-mortgage-Bountiful">Bountiful</a>
                        </li>
                        <li>
                          <a title="Utah  Mortgage  Syracuse" href="/Utah-Mortgage-Syracuse">Syracuse</a>
                        </li>
                        <li>
                          <a title="Reverse Mortgage  Utah  Ogden" href="/Reverse-mortgage-Utah-Ogden">Ogden</a>
                        </li>
                        <li>
                          <a title="Reverse Mortgage  Utah  West Valley City" href="/Reverse-mortgage-Utah-WestValleyCity">
                            West Valley City
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="pb-2 text-xl text-black py-2 px-2 text-center  border-b-2 md:border-b-0  hover:bg-slate-600  border-black-900  md:hover:bg-transparent">
                    <li className="dropdown">
                      <p>
                        Florida
                        <ArrowDropDownIcon />
                      </p>
                      <ul className="dropdown-content">
                        <li>
                          <a title="Reverse Mortgage  Florida  Venice" href="/Reverse-mortgage-Florida-Venice">Venice</a>
                        </li>
                        <li>
                          <a title="Reverse Mortgage  Florida  Palm  Beach" href="/Reverse-mortgage-Florida-Palm-Beach">
                            Palm Beach
                          </a>
                        </li>
                        <li>
                          <a title="Reverse Mortgage  Florida  Naples" href="/Reverse-mortgage-Florida-Naples">Naples</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="pb-2 text-xl text-black py-2 px-2 text-center  border-b-2 md:border-b-0  hover:bg-slate-600  border-black-900 md:hover:bg-transparent">
                    <li className="dropdown">
                      <ul>
                        <li className="dropdown">
                          <p>
                            Texas
                            <ArrowDropDownIcon />
                          </p>
                          <ul className="dropdown-content">
                            <li>
                              <a title="Reverse Mortgage  Texas  Austin" href="/Reverse-mortgage-Texas-Austin">
                                Austin
                              </a>
                            </li>
                            <li>
                              <a title="Reverse Mortgage  Texas  Houston" href="/Reverse-mortgage-Texas-Houston">
                                Houston
                              </a>
                            </li>
                            <li>
                              <a title="Reverse Mortgage  Texas  Dallas" href="/Reverse-mortgage-Texas-Dallas">
                                Dallas
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <li className="pb-2 text-xl text-black py-2 px-2 text-center  border-b-2 md:border-b-0  hover:bg-slate-600  border-black-900 md:hover:bg-transparent">
                    <Link
                    target="_blank"
                      className="mortgage-company-utah-apply-today"
                      href="https://thehtmortgage.my1003app.com?time=1728535279914"
                      title="apply The Hometown Mortgage Co"
                    >
                      Loan Questionnaire
                    </Link>
                  </li>
                  <li className="pb-2 text-xl text-black py-2 px-2 text-center  border-b-2 md:border-b-0  hover:bg-slate-600  border-black-900 md:hover:bg-transparent">
                    <Link
                      className="mortgage-company-utah-team-number"
                      href="/"
                      title="Kenny Farshchian W/The Hometown Mortgage Co.. Phone Number"
                    >
                      801-520-8475
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    
      {/* mobile nav */}
      <MobileNav />
    </>
  );
};

export default Navbar;
