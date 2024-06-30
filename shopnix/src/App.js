import {Route, Routes } from "react-router-dom";
import SelectTheme from "./components/SelectTheme";
import AddCategory from "./components/AddCategory";
import AddProduct from "./components/AddProduct";
import SetUpTheStore from "./components/SetUpTheStore";
import ReviewPage from "./components/ReviewPage";

import "./App.css";

const App = () => (
  <Routes>
    <Route exact path="/" element={<SelectTheme />}></Route>
    <Route path="/add-category" element={<AddCategory />}></Route>
    <Route path="/add-product" element={<AddProduct />}></Route>
    <Route path="/set-store" element={<SetUpTheStore />}></Route>
    <Route path="/review-page" element={<ReviewPage />}></Route>
  </Routes>
);

export default App;
