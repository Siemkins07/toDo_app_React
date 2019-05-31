import React from 'react';
import Task from './Task';

const TaskList = (props) => {


    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);
    // console.log(active);
    // console.log(done);

    if (done.length >= 2) {
        done.sort((a, b) => b.finishDate - a.finishDate)
    }

    if (active.length >= 2) {
        active.sort((a, b) => {

            a = a.text.toLowerCase();
            b = b.text.toLowerCase()

            if (a < b) return -1;
            if (a > b) return 1;
            return 0
        })
    }


    const activeTasks = active.map(task => <Task key={task.id}
        task={task} delete={props.delete} done={props.done} />)
    const doneTasks = done.map(task => < Task key={task.id} task={task} delete={props.delete}
    />)

    return (
        <>
            <div className="active" >
                <h2>Zadania do zrobienia </h2> {
                    activeTasks.length > 0 ? activeTasks : <p> Nie masz nic do zrobienia.Odpoczywaj </p>}
            </div>
            <hr />

            <div className="done">
                <h2 > Zadania wykonane({doneTasks.length}) </h2> {
                    <span style={{
                        fontSize: '12px',
                        fontFamily: "tahoma",
                        marginTop: "-30px"
                    }}>{doneTasks}</span>}  {
                }
            </div>
        </>
    );
}

export default TaskList;