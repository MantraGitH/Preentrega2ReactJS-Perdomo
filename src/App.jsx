import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

const App = () => {
  return (
    <div>
      <NavBar />
      
      <Routes>
        
        <Route path="/" element={<ItemListContainer />} />

        
        <Route path="/category/:categoryId" element={<ItemListContainer />} />

        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </div>
  );
};

export default App;
