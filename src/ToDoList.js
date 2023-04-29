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
        <dl class="list-unstyled">
            <dt class="col-md-8 border text-center m-auto mt-4 p-2">
                ToDo1
                <button class="btn btn-primary btn-sm" type="submit">削除</button>
            </dt>
            <dd class="col-md-8 border m-auto p-2">
                <p class="text-left">ここに内容テーブルが入ります。</p>
                <div class="">
                    <button class="btn btn-primary btn-sm" type="submit">編集</button>
                </div>
            </dd>
            <dt class="col-md-8 border m-auto mt-4 p-2">ToDo2</dt>
            <dd class="col-md-8 border m-auto p-2">ここに内容テーブルが入ります。</dd>
            <dt class="col-md-8 border m-auto mt-4 p-2">ToDo3</dt>
            <dd class="col-md-8 border m-auto p-2">ここに内容テーブルが入ります。</dd>
            <dt class="col-md-8 border m-auto mt-4 p-2">ToDo4</dt>
            <dd class="col-md-8 border m-auto p-2">ここに内容テーブルが入ります。</dd>
        </dl>
    </div>
    )
}

export default ToDoList