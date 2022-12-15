import { Route, Routes } from "react-router-dom";
import AddTask from "./Components/Addtask/AddTask";
import Done from "./Components/Done/Done";
import Edit from "./Components/Edit/Edit";
import Header from "./Components/Header/Header";
import ListTask from "./Components/ListTask/ListTask";
import Undone from "./Components/Undone/Undone";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <div className="app">
      <AddTask />
      <Header />
      <Routes>
        <Route exact path="/listtask" element={<ListTask />} />
        <Route path="/listtask/:id" element={<Edit />} />
        <Route path="/done" element={<Done />} />
        <Route path="/undone" element={<Undone />} />
      </Routes>
    </div>
  );
}

export default App;
