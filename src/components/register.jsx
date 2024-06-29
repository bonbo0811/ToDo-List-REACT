import React from 'react'
import { Link } from "react-router-dom";
import { useState, ChangeEventHandler, FormEventHandler } from "react";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const [name, setname] = useState("");
    const [content, setcontent] = useState("");
    const navigate = useNavigate();

    const validationRule ={
        required : "登録名を入力してください。",
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
          // POST送信
            fetch("http://localhost:8080/todo/jsontest", {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            name: name,
            content: content,
            })  
        }).then(function(response) {
            console.log("成功しました")
        }, function(error) {
            console.log("失敗です")
        });
        navigate("/");
    };

    const handleChangeContentName = (e) => {
        setname(e.target.value);
    };

    const handleChangeContent = (e) => {
        setcontent(e.target.value);
    };

    return (
        <div>
            <div>
                <nav class="navbar navbar-light bg-light">
                    <div class="container-fluid">
                        <Link class="navbar-brand p-3 h1 m-auto ps-5" to="/">ToDoリスト</Link>
                        <Link class="btn btn-primary me-5" to="/Register">登録</Link>
                    </div>
                </nav>
                <form method='POST' onSubmit={handleSubmit}>
                    <dl class="list-unstyled">
                        <dt class="col-md-8 border text-center m-auto mt-4 p-2 d-flex">
                                <span class="col-md10 m-auto">登録内容</span>
                        </dt>
                        <dd class="col-md-8 border m-auto p-2">
                            <p class="text-center">登録名</p>
                            <div class="text-center">
                                <div class="col-md-11 m-auto mb-1">
                                    <input class="form-control" type="Text" placeholder="例：勉強" value={name} onChange={handleChangeContentName} required></input>
                                </div>
                            </div>
                            <p class="text-center">新規登録</p>
                                <div class="text-center">
                                <div class="col-md-11 m-auto mb-1">
                                    <textarea class="form-control" id="exampleFormControlTextarea1" value={content} onChange={handleChangeContent} placeholder="内容テーブルに追加するデータを記入する" rows="6" required></textarea>
                                </div>
                                <Link class="btn btn-secondary btn-sm m-3" to="/">戻る</Link>
                                <button class="btn btn-secondary btn-sm m-3" type="submit" >登録</button>
                            </div>
                        </dd>
                    </dl>
                </form>
            </div>
        </div>
    )
}

export default Register