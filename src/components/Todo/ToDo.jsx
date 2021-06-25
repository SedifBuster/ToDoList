import React from 'react'
import style from './ToDo.module.css'

const ToDo = ({toDo, onDeleteTodo, onCompleteTodo}) => {
    return (<div className={style.toDo}>
        <div className={style.fieldToDo}>
            <div className={toDo.complete ? style.toDoPlaceHolderStrike : style.toDoPlaceHolder}
                 onClick={() => onCompleteTodo(toDo.id)}>{toDo.userInput}</div>
            <button className={style.toDoBtn} onClick={() => onDeleteTodo(toDo.id)}>X</button>
        </div>
    </div>)
}

export default ToDo