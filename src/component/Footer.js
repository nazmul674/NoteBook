import React from "react";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  console.log(year);
  return (
    <footer>
      <p className="p">Copyright {year}</p>
    </footer>
  );
}

export default Footer;
