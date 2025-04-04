import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { TiTick } from "react-icons/ti";

const AllTask = () => {
  const [addData, setAddData] = useState([]);
  const [inputText, setInputText] = useState("");

  function handleInput(e) {
    setInputText(e.target.value);
  }

  function setData() {
    if (inputText.trim() === "") return; // Prevent adding empty strings
    setAddData((prev) => [...prev, inputText]);
    setInputText("");
  }

  function deleteData(index) {
    console.log("Item deleted");
    setAddData((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Type something"
        className="p-4 text-black font-bold bg-gray-200 rounded-lg"
        value={inputText}
        onChange={handleInput}
      />
      <button
        className="py-4 px-8 bg-blue-500 ml-4 rounded-xl hover:bg-blue-700 text-white"
        onClick={setData}
      >
        Add
      </button>

      {addData.map((data, index) => (
        <div key={index}>
          <div className="flex justify-between items-center bg-gray-200 p-4 mt-4 rounded-lg">
            <h1 className="text-2xl font-bold text-gray-700">{data}</h1>
            <div className="flex gap-4">
              <TiTick />
              <CiEdit />
              <MdDeleteForever
                onClick={() => deleteData(index)}
                className="cursor-pointer h-[24px] w-[24px] text-red-500"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllTask;
