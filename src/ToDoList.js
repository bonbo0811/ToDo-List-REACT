import React from 'react'
import { Link } from "react-router-dom";

const ToDoList = () => {
    return (
    <div>
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <span class="navbar-brand p-3 h1 m-auto ps-5">ToDoリスト</span>
                <Link class="btn btn-primary me-5" to="/Register">登録</Link>
            </div>
        </nav>
        <dl class="list-unstyled">
            <dt class="col-md-8 border text-center m-auto mt-4 p-2 d-flex">
                <span class="col-md10 m-auto">ToDo1</span>
                <Link class="btn btn-warning btn-sm me-4" to="/Delete">削除</Link>
            </dt>
            <dd class="col-md-8 border m-auto p-2">
                <p class="p-3">ここに内容テーブルが入ります。</p>
                    <div class=" d-flex">
                        <Link class="btn btn-secondary btn-sm ms-auto me-4" to ="/Edit">編集</Link>
                    </div>
            </dd>
            <dt class="col-md-8 border text-center m-auto mt-4 p-2 d-flex">
                <span class="col-md10 m-auto">ToDo2</span>
                <button class="btn btn-warning btn-sm me-4" type="submit">削除</button>
            </dt>
            <dd class="col-md-8 border m-auto p-2">
                <p class="p-3">ここに内容テーブルが入ります。</p>
                <div class=" d-flex">
                    <button class="btn btn-secondary btn-sm ms-auto me-4" type="submit">編集</button>
                </div>
            </dd>
            <dt class="col-md-8 border text-center m-auto mt-4 p-2 d-flex">
                <span class="col-md10 m-auto">ToDo3</span>
                <button class="btn btn-warning btn-sm me-4" type="submit">削除</button>
            </dt>
            <dd class="col-md-8 border m-auto p-2">
                <p class="p-3">ここに内容テーブルが入ります。</p>
                <div class=" d-flex">
                    <button class="btn btn-secondary btn-sm ms-auto me-4" type="submit">編集</button>
                </div>
            </dd>
            <dt class="col-md-8 border text-center m-auto mt-4 p-2 d-flex">
                <span class="col-md10 m-auto">ToDo4</span>
                <button class="btn btn-warning btn-sm me-4" type="submit">削除</button>
            </dt>
            <dd class="col-md-8 border m-auto p-2">
                <p class="p-3">ここに内容テーブルが入ります。</p>
                <div class=" d-flex">
                    <button class="btn btn-secondary btn-sm ms-auto me-4" type="submit">編集</button>
                </div>
            </dd>
        </dl>
    </div>
    )
}

export default ToDoList