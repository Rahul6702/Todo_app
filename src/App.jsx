import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import TodoHeading from './component/TodoHeading'
import TodoaddElem from './component/TodoaddElem'

import Todoitems from './component/Todoitems'
import WelcomeMessage from './component/WelcomeMessage'
function App() {
 
    const [todoItems, setTodoItems] = useState([]);
    const handdleNewItem =(itemName, itemDueDate) =>{
      // console.log(`New Item Added :${itemName} Date:${itemDueDate}`);
      const newTodoItems = [...todoItems,{ name : itemName,
      DueDate : itemDueDate}];
      setTodoItems(newTodoItems);
    };
    const handleDeleteItem = (todoitemName) =>{
      const newTodoItems = todoItems.filter (item =>item.name !== todoitemName)
        // console.log(`Item deleted :${todoitemName}`);
        setTodoItems(newTodoItems);
    }

  return (
    
      <div>
       <div className="container">
           <TodoHeading/>
          
           <TodoaddElem onNewItem={handdleNewItem}/>
           <Todoitems todoItems={todoItems} onDeleteClick={handleDeleteItem}/>
           {todoItems.length === 0 &&<WelcomeMessage todoItems={todoItems}/>}
        
          
       </div>
      </div>
      
    
  )
}

export default App
