import { useState } from "react";
import "./App.css";

export const UseStateBasic = () => {
  const [name, setName] = useState("デフォルト");
  const [age, setAge] = useState(0);
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeAge = (e) => {
    setAge(e.target.value);
  };
  const onClickReset = () => {
    setName("");
    setAge("");
  };
  return (
    <>
      <div className="m-5">
        <h2>Name: {`${name}`}</h2>
        <h2>Age: {`${age}`}</h2>
        <div className="flex flex-col items-start">
          <input
            className="border border-grey w-2/5 p-1 my-1"
            type="text"
            value={name}
            onChange={changeName}
          />
          <input
            className="border border-grey w-2/5 p-1 my-1"
            type="number"
            value={age}
            onChange={changeAge}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
            onClick={onClickReset}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};
