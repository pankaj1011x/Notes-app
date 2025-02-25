import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import Note from "./components/Note";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <NavigationBar />
      <Note />
    </RecoilRoot>
  );
}

export default App;
