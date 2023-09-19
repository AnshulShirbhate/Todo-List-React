import {React, useState} from "react";

export default function AddTodo(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !description){
            alert("Title or Description Missing");
        }else{
            props.addTodo(title, description)
            setTitle("");
            setDescription("");
        } 
    }
    return (
        <div className="container my-3">
        <h3>Add Work</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title"  placeholder="Enter Title" />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="exampleInputPassword1">Description</label>
                    <input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} className="form-control" id="description" placeholder="Description" />
                </div>
                <button type="submit" className="mt-2 btn btn-success btn-sm">Submit</button>
            </form>
        </div>
    )
}