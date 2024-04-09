import React from "react";
import { Link } from "react-router-dom";
function FooterLinks({ label, link, className=""}) {
  return (
    <>
      <div className={`${className} text-textLight text-[15px]`}>
        <Link to={link}>{label}</Link>
      </div>
    </>
  );
}

export default FooterLinks;
