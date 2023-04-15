import React from 'react'

const ToDoList = () => {
    return (
    <div>
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <span class="navbar-brand p-3 h1 m-auto ps-5">ToDoリスト</span>
                <button class="btn btn-primary me-5" type="submit">登録</button>
            </div>
        </nav>
        <ul class="text-center list-unstyled ">
            <li class="col-md-8 border p-2 m-4">ToDo1</li>
            <li class="col-md-8 border p-2 m-4">ToDo2</li>
            <li class="col-md-8 border p-2 m-4">ToDo3</li>
            <li class="col-md-8 border p-2 m-4">ToDo4</li>
            <li class="col-md-8 border p-2 m-4">ToDo5</li>
        </ul>
    </div>
    )
}

export default ToDoList