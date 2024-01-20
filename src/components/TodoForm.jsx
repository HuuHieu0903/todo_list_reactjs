import { useState } from "react";

export default function TodoForm({addTodo, numOfJob}){
    const currDate = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const [job, setJob] = useState('');
    const handleChange = (e) => {
        setJob(e.target.value);
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        if (job === '') return;
        addTodo(job);
        setJob('');
    }

    return (
        <div className="header">
            <div className="date">
                <p className="day_of_week">{days[currDate.getDay()]}</p>
                <p className="numJobs">{numOfJob} Tasks</p>
            </div>
            <form className="form">
                <input type="text" value={job} onChange={handleChange}/>
                <button onClick={handleSubmit}>Add</button>
            </form>
        </div>
    )
}