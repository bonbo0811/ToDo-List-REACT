import React from 'react'
import { Link } from "react-router-dom";

const Edit = () => {
    return (
    <div>
        <div>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <span class="navbar-brand p-3 h1 m-auto ps-5">ToDoリスト</span>
                    <Link to="/"><button class="btn btn-primary me-5" type="submit">登録</button></Link>
                </div>
            </nav>
            <dl class="list-unstyled">
                <dt class="col-md-8 border text-center m-auto mt-4 p-2 d-flex">
                    <span class="col-md10 m-auto">登録内容</span>
                </dt>
                <dd class="col-md-8 border m-auto p-2">
                    <p class="text-center">内容登録</p>
                    <div class="text-center">
                        <div class="col-md-11 m-auto mb-1">
                            <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="該当の内容テーブルを取得し表示する" rows="6"></textarea>
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

export default Edit