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
            <dt class="col-md-8 border text-center m-auto mt-4 p-2 d-flex">
                <span class="col-md10 m-auto">ToDo1</span>
                <button class="btn btn-warning btn-sm me-4" type="submit">削除</button>
            </dt>
            <dd class="col-md-8 border m-auto p-2">
                <p class="p-3">ここに内容テーブルが入ります。</p>
                <div class=" d-flex">
                    <button class="btn btn-secondary btn-sm ms-auto me-4" type="submit">編集</button>
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

        {/* ここから登録ページ（遷移ご貼り付け） */}
        <div>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <span class="navbar-brand p-3 h1 m-auto ps-5">ToDoリスト</span>
                    <button class="btn btn-primary me-5" type="submit">登録</button>
                </div>
            </nav>
            <dl class="list-unstyled">
                <dt class="col-md-8 border text-center m-auto mt-4 p-2 d-flex">
                    <span class="col-md10 m-auto">登録内容</span>
                </dt>
                <dd class="col-md-8 border m-auto p-2">
                    <p class="text-center">新規登録</p>
                    <div class="text-center">
                        <div class="col-md-11 m-auto mb-1">
                            <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="内容テーブルに追加するデータを記入する" rows="6"></textarea>
                        </div>
                        <button class="btn btn-secondary btn-sm m-3" type="submit">戻る</button>
                        <button class="btn btn-secondary btn-sm m-3" type="submit">登録</button>
                    </div>
                </dd>
            </dl>
        </div>
    </div>
    )
}

export default ToDoList