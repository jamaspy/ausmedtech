import React from "react";

const Memebership = () => {
  return (
    <div
      className="grid grid-cols-4 gap-4 px-8 py-24 bg-gradient-to-r from-mint to-navy"
      style={{ clipPath: "polygon(0 0, 100% 8%, 100% 100%, 0% 92%)" }}
    >
      <div className="rounded-xl shadow bg-white p-4">Aus Memeber</div>
      <div className="rounded-xl shadow bg-white p-4">International Member</div>
    </div>
  );
};

export default Memebership;
