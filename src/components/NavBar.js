import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const anchors = links.map((link) => (
    <a key={links.linkage} href={"#" + link}>
      {link}
    </a>
  ));
  return <nav>{anchors}</nav>;
}

export default NavBar;