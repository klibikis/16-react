import React from "react";
import { Task } from "../interfaces"

interface Props {
    task: Task;
    completeTask(taskNameToComplete: string): void;
}

export const TodoTask = ({ task, completeTask }:Props) => {
    return (
        <div className="task__item">
            <div className="task__item--item">
                <input type = "checkbox" className="task__item--checkbox"/>
                <span>{task.taskName}</span>
            </div>
            <button onClick= {() => {completeTask(task.taskName)}} className="task__delete">X</button>
        </div>
    );
};

