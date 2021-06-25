import './App.css';
import Field from "./components/Field/Field";
import ToDo from "./components/Todo/ToDo";
import {useState} from "react";

function App() {
    //создаем хуки для работы с локальный стейтом
    let [value, setValue] = useState("")
    let [toDos, setToDos] = useState([])

    //если есть value у хука создаем обьект и сетаем его в toDos
    let saveTodo = (value) => {
        if (value) {
            const toDo = {
                id: Math.random().toString(36).substr(2, 4),
                userInput: value,
                complete: false
            }
            setToDos([toDo, ...toDos])
        }
    }

    //выводим взаимодействие с ui в контейнерную из презентационной
    let onChangeValue = (e) => {
        setValue(e.target.value)
    }

    let onSubmitValue = (e) => {
        e.preventDefault()
        saveTodo(value)
        setValue('')
    }

    let onDeleteTodo = (id) => {
        setToDos([...toDos.filter((todo) => todo.id !== id)])
    }

    let onCompleteTodo = (id) => {
        setToDos([...toDos.map((todo) => todo.id === id ? {...todo, complete: !todo.complete} : {...todo})
        ])
    }

    return (
        <div className={"app"}>
            <header className={"appHeader"}>
                <h1>To do list</h1>
            </header>
            <Field value={value} onChangeValue={onChangeValue} onSubmitValue={onSubmitValue}/>
            {toDos.map((toDo) => {
                return <ToDo
                    toDo={toDo} key={toDo.id} onDeleteTodo={onDeleteTodo} onCompleteTodo={onCompleteTodo}
                />
            })}
        </div>
    );
}

export default App;
