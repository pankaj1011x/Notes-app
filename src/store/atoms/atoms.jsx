import { atom } from "recoil";

export const noteAtom = atom({
  key: "NoteAtom",
  default: false,
});

export const noteAtomTitle = atom({
  key: "NoteAtomTitle",
  default: "",
});

export const noteAtomText = atom({
  key: "NoteAtomText",
  default: "",
});

export const notes = atom({
  key: "Notes",
  default: [],
});
