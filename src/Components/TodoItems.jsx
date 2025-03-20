import './CSS/TodoItems.css'
import tick from './Assets/tick.png';
import no_tick from './Assets/not_tick.png';
import cross from './Assets/cross.png';

const TodoItems = ({no,display,text,setTodos}) => {
    const deleteItem = (no) => {
        let data = JSON.parse(localStorage.getItem("todos"));
        data = data.filter(item => item.no !== no);
        setTodos(data);
    }
    const toggle = () => {
        let data = JSON.parse(localStorage.getItem("todos"));
        for (let i = 0; i < data.length; i++) {
            if (data[i].no === no) {
                if (data[i].display === "") {
                    data[i].display = "tick";
                } else {
                    data[i].display = "";
                }
                break;
            }
        }
        setTodos(data);
    }
    return (
        <div className="todo-items">
            <div className={`todo-items-container ${display}`} onClick={()=>toggle(no)}>
                {display===""?<img src={no_tick} alt=""/>:<img src={tick} alt=""/>}
                <div className="todo-items-text">{text}</div>
            </div>
            <img onClick={()=>deleteItem(no)} className="delete-todo" src={cross} alt=""/>
        </div>
    );
};
export default TodoItems;