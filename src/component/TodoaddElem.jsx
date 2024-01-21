
import { useState } from "react";
import { AiOutlineCarryOut } from "react-icons/ai";

  const TodoaddElem = ({onNewItem}) =>{

  const [todoName, setTodoName] = useState("");
  const [todoDate, setDueDate] = useState("");
  const handleNameChange = (event)=>{
      setTodoName(event.target.value);
  };
  const handleDateChange = (event) =>{
      setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () =>{
    onNewItem(todoName,todoDate);
    setTodoName("");
    setDueDate("");
  };
  return(
      <div>
        <div className="container text-center">
           <div className="row">
            <div className="col-5">
              <input type="text" placeholder="Enter your todo here." value={todoName} onChange={handleNameChange}/>
            </div>

            <div className="col-5">
              <input type="date" value={todoDate}  onChange={handleDateChange}/>
            </div>

            <div className="col-2">
              <button  className="btn btn-success" onClick={handleAddButtonClicked}>
              <AiOutlineCarryOut />
              </button>
            </div>
           </div>
        </div>
      </div>
  );
}
export default TodoaddElem;