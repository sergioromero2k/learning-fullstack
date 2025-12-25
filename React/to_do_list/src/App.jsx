import { useState } from "react";
import Contador from "./Components/Contador";

function App() {
  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg text-center">
      <h3 className="text-2xl font-bold text-indigo-600 mb-4">Mi Aplicación</h3>
      <InputControlado />
    </div>
  );
}

export default App;
