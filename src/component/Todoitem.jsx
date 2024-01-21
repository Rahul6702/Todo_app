
function Todoitem( {todoitemName, tododate,onDeleteClick}){
  return(
      <div>
        <div className="container">
          <div className="row">
            <div className="col-5">{todoitemName}</div>
            <div className="col-5">{tododate}</div>
            <div className="col-2">
              <button className="btn btn-danger" onClick={() =>onDeleteClick(todoitemName)}>Delete</button>
            </div>
          </div>
        </div>
      </div>
  );
}
export default Todoitem;