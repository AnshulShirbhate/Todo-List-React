import { React, Fragment, useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import { Routes, Route } from "react-router-dom";
import About from "./About";

export default function App() {
    let initTodo;
    if (localStorage.getItem("todos") === null) {
        initTodo = [];
    } else {
        initTodo = JSON.parse(localStorage.getItem("todos"));
    }
    const onDelete = (todo) => {
        setTodos(todos.filter((e) => {
            return e !== todo;
        }));
        localStorage.setItem("todos", JSON.stringify(todos));
    }



    const addTodo = (title, description) => {
        let sno;
        if (todos.length === 0) {
            sno = 0;
        } else {
            sno = todos[todos.length - 1].sno + 1;
        }

        const newTodo = {
            sno: sno,
            title: title,
            description: description
        }
        setTodos([...todos, newTodo]);
    }

    const [todos, setTodos] = useState(initTodo);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));

    }, [todos])

    return (
        <Routes>
            <Route exact path="/" element={
                <Fragment>
                    <Header title="Todo List" searchBar={false} />
                    <AddTodo addTodo={addTodo} />
                    <Todos onDelete={onDelete} todos={todos} />
                    <Footer />
                </Fragment>
            } />

            <Route exact path="about" element={
                <Fragment>
                    <Header title="Todo List" searchBar={false} />
                    <About />
                    <Footer />
                </Fragment>
            } />
        </Routes>
    )
}