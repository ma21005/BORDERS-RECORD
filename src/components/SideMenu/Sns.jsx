import React from "react";
import LogoX from "../../images/x-logo-white.png"

export default function Sns() {

  return (
    <div>
      <h1 className="filter-item">SNS</h1>
      <a
        href="https://x.com/GOTCHA_0513"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <img
          src={LogoX}
          alt="X Logo"
          className="w-10 h-10 hover:opacity-80"
        />
      </a>
    </div>
  );
}
