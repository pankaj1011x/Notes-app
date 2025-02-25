import React from "react";

const SaveNote = ({ title, text, noteId, setNotes }) => {
  const handleDelete = () => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
  };
  return (
    <div
      key={noteId}
      className="border p-3 mt-5 mx-5 rounded-lg shadow-md w-60"
    >
      <h3 className="font-semibold">{title}</h3>
      <p>{text}</p>
      <div className="flex justify-end mt-3">
        <button
          onClick={handleDelete}
          className="bg-red-400 text-white px-5 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SaveNote;
