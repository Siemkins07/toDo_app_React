import React from 'react';
import './Task.css';

const Task = (props) => {

    const style = {
        color: 'orange'
    }
    const { text, date, id, active, important, finishDate } = props.task;

    if (active) {
        return (
            <div className='taskActive'>
                <p>
                    <strong style={important ? style : null}>{text}</strong> | <span>{date} </span>
                    <button onClick={() => props.done(id)}
                    >Pyk!</button>
                    <button onClick={() => props.delete(id)}>X</button>
                </p>
            </div>
        );
    } else {
        const finish = new Date(finishDate).toLocaleString()

        return (
            <div className="taskDone">
                <p>
                    <strong>{text}</strong> <em>(do {date})</em><br />
                    - wykonano <span>{finish} </span>
                    <button onClick={() => props.delete(id)}>X</button>
                </p>
            </div>
        );
    }
}

export default Task;