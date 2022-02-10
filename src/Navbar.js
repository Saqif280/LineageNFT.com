import { useState, useEffect } from "react";
import classNames from "classnames";
import { FaTwitter, FaInstagram, FaMedium } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const setOffset = () => {
      setScrollOffset(window.pageYOffset);
    };
    window.addEventListener("scroll", setOffset);
    return function cleanupListener() {
      window.removeEventListener("scroll", setOffset);
    };
  }, []);

  return (
    <div
      id="navbar"
      className={classNames("navbar", {
        secondary: scrollOffset > window.innerHeight - 70,
        open: navbarOpen,
      })}
    >
      <div className="left">
        <Link to="/#" className="logo">
          <h3>Lineage</h3>
        </Link>
        <Link to="/#about">About</Link>
        <Link to="/#faq">FAQ</Link>
        <Link to="/#roadmap">Roadmap</Link>
        <Link to="/#team">Team</Link>
        <a className="left-bordered" target="_blank" href="https://twitter.com/search?q=%22Encyclopedia%20entry%22%20(from%3ALineageNFT)%20-filter%3Areplies&src=typed_query">Lore</a>
        {/* <Link to="/mint">Mint</Link> */}
      </div>
      <div className="right">
        <a
          className="link--social"
          target="_blank"
          href="https://twitter.com/lineagenft"
        >
          <FaTwitter />
        </a>
        <a href="https://discord.gg/FbxxaqVVCU" className="button" target="_blank">
          Join the Discord
        </a>
      </div>
      <div className="navbar-controls">
        <a
          className="arrow-down"
          onClick={() => {
            setNavbarOpen(true);
          }}
        >
          <MdKeyboardArrowDown />
        </a>
        <a
          className="arrow-up"
          onClick={() => {
            setNavbarOpen(false);
          }}
        >
          <MdKeyboardArrowUp />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
