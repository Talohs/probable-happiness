import React, {useState} from 'react'


export default function Form(props) {
  

    
    

    return (
    <>
    <form className="form-floating my-3" onSubmit={props.handleFormSubmit}>
        <textarea className="form-control" name='task' id="task"></textarea>
        <label htmlFor="floatingTextarea">To-Do</label>
        <button type="submit" className="btn btn-success w-100">Add To-Do</button>
    </form>
    </>
  )
}
