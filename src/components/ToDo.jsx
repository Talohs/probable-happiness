import React, {useState} from 'react'
import Card from './Card'
import Form from './Form';


export default function ToDo(props) {

    const [tasks, setTasks] = useState([])
  
    function handleFormSubmit(event){
        
        event.preventDefault();
        console.log(event)
        let newTask = event.target.task.value;
        setTasks([...tasks, newTask]);
        event.target.task.value = '';
    }

    // function deleteFormSubmit(event){
    //     console.log(event)
    //     event.preventDefault();
    //     let delTask = event.target.task.value
    //     tasks.slice([...tasks].indexOf(delTask), 1)
    // }

  return (
    <>
    <Form handleFormSubmit={handleFormSubmit} />
    <div className='row'>
        {tasks.map((task, idx) => <Card task={task} key={idx} color={props.color}  />)}
    </div>
</>
  )
}
