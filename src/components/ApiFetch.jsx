import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const ApiFetch = () => {
	const [todos, setTodo] = useState([]);

	useEffect(() => {
		// APIをfetchする(呼び出す)
		// fetch("http://localhost:8080/Hello/api1", { method: "GET" })
		fetch("http://localhost:8080/todo/all", { method: "GET" })
			// レスポンスのデータ形式をjsonに設定
			.then((res) => res.json())
			// APIから渡されるレスポンスデータ(data)をstateにセットする
			.then((data) => {
				setTodo(data);
			});
	}, []);

		return (
			<div>
				<nav class="navbar navbar-light bg-light">
					<div class="container-fluid">
						<Link class="navbar-brand p-3 h1 m-auto ps-5" to="/">ToDoリスト</Link>
						<Link class="btn btn-primary me-5" to="/Register">登録</Link>
					</div>
				</nav>
				{ todos.length && todos.map(m => <dl key={m.id}>
					<dt class="col-md-8 border text-center m-auto mt-4 p-2 d-flex">
						<span class="col-md10 m-auto">{m.name}</span>
						<Link class="btn btn-warning btn-sm me-4" to={'/Delete/id/' + m.id}>削除</Link>
					</dt>
					<dd class="col-md-8 border m-auto p-2">
						<p class="p-3">{m.content}</p>
						<div class=" d-flex">
							<Link class="btn btn-secondary btn-sm ms-auto me-4" to ={'/Edit/id/' + m.id}>編集</Link>
						</div>
					</dd>
				</dl>) }
			</div>
		);
}

export default ApiFetch;