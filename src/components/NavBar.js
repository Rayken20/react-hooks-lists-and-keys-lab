import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const anchors = links.map((link, index) => (
    <a key={index} href={"#" + link}>
      {link}
    </a>
  ));
  return <nav>{anchors}</nav>;
}

export default NavBar;