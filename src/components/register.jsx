import React from 'react'
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState, ChangeEventHandler, FormEventHandler } from "react";


const Register = () => {
    const [contentName, setcontentName] = useState("");
    const [content, setcontent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            contentName,
            content,
        });
    };

    const handleChangeContentName = (e) => {
        setcontentName(e.target.value);
    };

    const handleChangeContent = (e) => {
        setcontent(e.target.value);
    };

    return (
    <form  onSubmit={handleSubmit}>
        <div>
            <div>
                <nav class="navbar navbar-light bg-light">
                    <div class="container-fluid">
                        <Link class="navbar-brand p-3 h1 m-auto ps-5" to="/">ToDoリスト</Link>
                        <button class="btn btn-primary me-5" type="submit">登録</button>
                    </div>
                </nav>
                <dl class="list-unstyled">
                    <dt class="col-md-8 border text-center m-auto mt-4 p-2 d-flex">
                        <span class="col-md10 m-auto">登録内容</span>
                    </dt>
                    <dd class="col-md-8 border m-auto p-2">
                        <p class="text-center">登録名</p>
                        <div class="text-center">
                            <div class="col-md-11 m-auto mb-1">
                                <input class="form-control" type="Text" placeholder="例：勉強" value={contentName} onChange={handleChangeContentName}></input>
                            </div>
                        </div>
                        <p class="text-center">新規登録</p>
                        <div class="text-center">
                            <div class="col-md-11 m-auto mb-1">
                                <textarea class="form-control" id="exampleFormControlTextarea1" value={content} onChange={handleChangeContent} placeholder="内容テーブルに追加するデータを記入する" rows="6"></textarea>
                            </div>
                            <button class="btn btn-secondary btn-sm m-3"  onClick={() => this.props.history.goBack()} type="submit">戻る</button>
                            <button class="btn btn-secondary btn-sm m-3" type="submit">登録</button>
                        </div>
                    </dd>
                </dl>
            </div>
        </div>
    </form>
    )
}

export default Register