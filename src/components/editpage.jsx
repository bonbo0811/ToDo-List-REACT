import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

export const Edit = () => {
	const [todos, setTodo] = useState([]);
    const { id } = useParams();
    const searchNo = id ;
    const [name, setname] = useState("");
    const [content, setcontent] = useState("");

	useEffect(() => {
		// APIをfetchする(呼び出す)
		const query_params = new URLSearchParams(searchNo); 
		fetch('http://localhost:8080/todo/id/' + searchNo, { method: "GET" })
			// レスポンスのデータ形式をjsonに設定
			.then((res) => res.json())
			// APIから渡されるレスポンスデータ(data)をstateにセットする
			.then((data) => {
                setTodo(data);
                console.log(data);
			});
	}, []);

    const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log({
        //     id,
        //     name,
        //     content,
        // });
        // POST送信
            const query_params = new URLSearchParams(searchNo); 
            fetch('http://localhost:8080/todo/edit/' + searchNo, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                id:id, 
                name: name,
                content: content,
            })  

        }).then(function(response) {
            console.log("成功しました")
        }, function(error) {
            console.log("失敗です")
        });
    }

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
                            <Link to="/"><button class="btn btn-primary me-5" type="submit">登録</button></Link>
                        </div>
                    </nav>
                    <form method='POST' onSubmit={handleSubmit}>
                        <dl class="list-unstyled">
                            <dt class="col-md-8 border text-center m-auto mt-4 p-2 d-flex">
                                <span class="col-md10 m-auto">登録内容</span>
                            </dt>
                            <dd class="col-md-8 border m-auto p-2">
                                <p class="text-center">内容登録</p>
                                <div class="text-center mt-4 mb-1">
                                    <div class="m-auto col-sm-11 mb-3">
                                        <input type="text" class="form-control" value={name} onChange={handleChangeContentName}  placeholder={todos.name}></input>
                                    </div>
                                    <div class="col-md-11 m-auto mb-1">
                                        <textarea class="form-control" id="exampleFormControlTextarea1" value={content} onChange={handleChangeContent}  placeholder={todos.content} rows="6"></textarea>
                                    </div>
                                    <Link class="btn btn-secondary btn-sm m-3" to="/">戻る</Link>
                                    <button class="btn btn-secondary btn-sm m-3" type="submit">編集</button>
                                    <input type="hidden" name="id" value={searchNo}></input>
                                </div>
                            </dd>
                        </dl>
                    </form>
                </div>
            </div>
    )
}

export default Edit