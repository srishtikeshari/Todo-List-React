import './App.css';
import {Header} from "./Components/Header.js";
import {Todos} from "./Components/Todos.js";
import {Footer} from "./Components/Footer.js";

function App() {
  const onDelete = (todo) => {
      console.log("Delete called for ", todo);
  }
  let todos = [
    {
      sno: 1,
      title: "Todo 1",
      desc: "This is Todo 1"
    },
    {
      sno: 2,
      title: "Todo 2",
      desc: "This is Todo 2"
    },
    {
      sno: 3,
      title: "Todo 3",
      desc: "This is Todo 3"
    }
  ]
  return (

    <>
    <Header title="Todo List" searchBar={true}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>

    </>
  );
}

export default App;
