import React, { useRef, useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  noteAtom,
  noteAtomText,
  noteAtomTitle,
  notes,
} from "../store/atoms/atoms";
import SaveNote from "./SaveNote";

const Note = () => {
  const [isExpanded, setIsExpanded] = useRecoilState(noteAtom);
  const [inputTitle, setInputTitle] = useRecoilState(noteAtomTitle);
  const [inputText, setInputText] = useRecoilState(noteAtomText);
  const [note, setNotes] = useRecoilState(notes);
  const noteRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (noteRef.current && !noteRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleSave() {
    if (inputTitle.trim() || inputText.trim()) {
      setNotes([
        ...note,
        { id: Date.now(), title: inputTitle, text: inputText },
      ]);

      setInputTitle("");
      setInputText("");
    }
  }

  return (
    <>
      <div ref={noteRef} className="max-w-md mx-auto mt-10">
        <div
          className="border p-3 rounded-lg shadow-md transition-all duration-300"
          onClick={() => setIsExpanded(true)}
        >
          {isExpanded && (
            <input
              value={inputTitle}
              onChange={(e) => setInputTitle(e.target.value)}
              type="text"
              placeholder="Title"
              className="w-full p-2 mb-2 border-b outline-none"
            />
          )}
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Take a note..."
            className="w-full p-2 outline-none resize-none"
            rows={isExpanded ? 3 : 1}
          ></textarea>
          {isExpanded && (
            <div className="flex justify-end mt-3">
              <button
                onClick={handleSave}
                className="bg-blue-400 text-white px-5 py-2 rounded"
              >
                Save
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        {note.map((mynote) => {
          return (
            <SaveNote
              title={mynote.title}
              text={mynote.text}
              key={mynote.id}
              noteId={mynote.id}
              setNotes={setNotes}
            />
          );
        })}
      </div>
    </>
  );
};

export default Note;
