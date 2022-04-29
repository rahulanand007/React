import React, { useState } from 'react';

export const AddToDo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault()
        if(!title || !desc){
            alert("Title or description cannot be empty!")
        }else{
        props.addTodo(title,desc);
        setTitle("");
        setDesc("");
        }
    }

    return (
        <div className='container my-3'>
            <form onSubmit={submit}>
                <h3>Add a ToDo</h3>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Add ToDo</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
                </div>
                
                <button type="submit" className="btn btn-success btn-sm">Add ToDO</button>
            </form>
        </div>
    )
}
