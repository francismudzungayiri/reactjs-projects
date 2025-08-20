import React, { useState } from "react";

function Form({ isUserRegistered }) {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div className="w-[20%]">
      <input
        type="text"
        placeholder="jdoe@email.com"
        className=" w-full px-5 py-2 border-2 border-[#A2D5C6] rounded-sm"
      />
      <input
        type="password"
        placeholder="Password"
        className=" w-full px-5 py-2 border-2 border-[#A2D5C6] rounded-sm my-6"
      />

      {!isUserRegistered && (
        <input
          type="password"
          placeholder="Confirm Password"
          className=" w-full px-5 py-2 border-2 border-[#A2D5C6] rounded-sm mb-6"
        />
      )}
      <button
        onClick={increase}
        className="w-full py-3 bg-[#CFFFE2] text-[#000000] font-medium rounded-sm"
      >
        {isUserRegistered ? "Login" : "Register"}
      </button>

      <p className="mt-10 text-lg font-light">
        Times clicked:
        <span className="font-extrabold text-[#CFFFE2]">{count}</span>
      </p>
    </div>
  );
}

export default Form;
