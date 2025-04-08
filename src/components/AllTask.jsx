import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { TiTick } from "react-icons/ti";

const AllTask = () => {
  const [addData, setAddData] = useState([]);
  const [inputText, setInputText] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  function handleInput(e) {
    setInputText(e.target.value);
  }

  // function to add the item
  function setData() {
    if (inputText.trim() === "") return; // Prevent adding empty strings
    setAddData((prev) => [...prev, inputText]);
    setInputText("");
  }

  // function to delete the item
  function deleteData(index) {
    setAddData((prev) => prev.filter((_, i) => i !== index));
    if (index === editIndex) {
      setEditIndex(null);
      setEditText("")
    }
  }

  //function to edit the item
  function editData(index) {
    setEditIndex(index);
    setEditText(addData[index]);
  }

  //save the edit item

  function saveEditData() {
    if (editText.trim() === "") return;
    const updateData = [...addData];
    updateData[editIndex] = editText;
    setAddData(updateData);
    setEditIndex(null)
    setEditText("")
    
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
          <div className="flex justify-between items-start bg-gray-200 p-4 mt-4 rounded-lg ">
            {editIndex === index ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="p-4 text-black font-bold bg-gray-200 rounded-lg"
                placeholder="Edit your task"
              ></input>
            ) : (
              <h1 className="text-2xl font-bold text-gray-700 w-[380px] break-words pr-4">
                {data}
              </h1>
            )}
            <div className="flex gap-3 flex-shrink-0">
              {editIndex === index ? (
                <TiTick
                  className="h-[24px] w-[24px] cursor-pointer text-green-600"
                  onClick={() => saveEditData(index)}
                />
              ) : (
                <CiEdit
                  className="h-[24px] w-[24px] cursor-pointer"
                  onClick={() => editData(index)}
                />
              )}
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
