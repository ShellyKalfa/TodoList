import './App.css';
import logo from "../asset/sk.png"
import Todos from "../componets/Todos";
import SortButtens from "../componets/SortButtens";
import {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../redux/index"
import SortList from "../componets/SortList";

function App() {
  const state = useSelector((state) => state.Todo);
  const [data, setData] = useState(state);
  const dispatch = useDispatch();
  const {addTodoAction, removeTodoAction, updateTodoAction} = bindActionCreators(actionCreators, dispatch);
  const [sortType, setSortType] = useState("all");
  const changeSort = (typeSort) => {
    setSortType(typeSort);
    switch (typeSort) {
      case "all":
        setData(state)
        break;
      case "completed":
        setData(state.filter((Todo) => Todo.hasItBeenDone))
        break;
      case "active":
        setData(state.filter((Todo) => !Todo.hasItBeenDone))
        break;
      default:
        setData(state)
        break;
    }
  }
  useEffect(()=>{changeSort(sortType)},[state])


  return (
    <div className="App">
      <div className="appHeader">
        <img src={logo} className="App-logo"/>
        <span className="headerText"> Todo app</span>
      </div>
      <Todos add={addTodoAction} />
      <SortButtens handelClick={changeSort}/>
      <SortList data={data}
                update={updateTodoAction}
                remove={removeTodoAction}/>
    </div>
  );
}


export default App;
