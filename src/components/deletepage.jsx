import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

export const Delete = () => {
	const [todos, setTodo] = useState([]);
    const { id } = useParams();
    const searchNo = id ;
    

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

    return (
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
                        <p class="text-center">内容削除</p>
                        <div class="text-center">
                            <div class="col-md-11 m-auto mt-4 mb-1">
                                <h5>{todos.name}</h5>  
                                <p className="text-center">{todos.content}</p>
                            </div>
                            <Link class="btn btn-secondary btn-sm m-3" to="/">戻る</Link>
                            <button class="btn btn-secondary btn-sm m-3" type="submit">削除</button>
                        </div>
                    </dd>
                </dl>
            </div>
        </div>
        )
}

export default Delete;