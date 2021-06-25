import React from 'react'
import style from './Field.module.css'

const Field = ({value, onChangeValue, onSubmitValue}) => {
    return (
        <div className={style.wrap}>
            <form className={style.field} onSubmit={onSubmitValue}>
                <input className={style.fieldInput} onChange={onChangeValue} value={value} placeholder=" Введите свою задачу..."/>
                <button className={style.fieldBtn}>Ok</button>
            </form>
        </div>
    )
}

export default Field