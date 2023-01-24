import React from 'react'


export default function Card(props) {
    

    return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">{props.setCount}</h5>
            <p className="card-text">{props.task}</p>
            {/* <form onSubmit={props.deleteFormSubmit(props.task)}>
            <button type='submit' className={`btn btn-${props.color}`} >Done</button>
            </form> */}
        </div>
        </div>
    </div>
  )
}
