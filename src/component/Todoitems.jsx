
import Todoitem from "./Todoitem";

const Todoitems = ({todoItems, onDeleteClick}) =>{
  return(
      <div>
        <div className="items-container">
          {todoItems.map((item) =>(
           <Todoitem key={item.name} todoitemName={item.name} tododate={item.DueDate} onDeleteClick={onDeleteClick}/>
          ))}
        </div>
      </div>
  );
}
export default Todoitems;