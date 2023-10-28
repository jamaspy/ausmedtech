import React from "react";

const Memebership = () => {
  return (
    <div
      className="flex flex-col gap-4 md:flex-row justify-around px-8 py-24 bg-gradient-to-r from-mint to-navy"
      style={{ clipPath: "polygon(0 0, 100% 8%, 100% 100%, 0% 92%)" }}
    >
      <div className="rounded-xl shadow bg-white p-4 text-center w-full max-w-md">
        <p className="text-xl font-semibold text-zinc-700">
          Australasian Member
        </p>
        <p className="text-2xl font-bold mt-2">
          AUD$1,000 <span className="text-xs">+GST</span>
        </p>
        <p className="text-xs text-zinc-600">annual membership</p>
        <button className="px-4 py-2 rounded-lg bg-mint text-white font-semibold mt-4">
          Join Now
        </button>
      </div>
      <div className="rounded-xl shadow bg-white p-4 text-center w-full max-w-md">
        <p className="text-xl font-semibold text-zinc-700">
          International Member
        </p>
        <p className="text-2xl font-bold mt-2">
          AUD$2,000 <span className="text-xs">+GST</span>
        </p>
        <p className="text-xs text-zinc-600">annual membership</p>
        <button className="px-4 py-2 rounded-lg bg-mint text-white font-semibold mt-4">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Memebership;
