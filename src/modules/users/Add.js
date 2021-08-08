import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ChildOfAdd from './ChildOfAdd';

export default function Add() {
  const history = useHistory();

  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);

  const fetchPosts = async () => {
    const res1 = await fetch('https://jsonplaceholder.typicode.com/posts');
    const res2 = await fetch('https://jsonplaceholder.typicode.com/todos');
    const posts = await res1.json();
    const todos = await res2.json();
    posts.length = 10;
    todos.length = 10;
    setPosts(posts);
    setTodos(todos);
  };

  useEffect(() => {
    console.log('Parent useEffect!');
    fetchPosts();

    return () => {
      console.log('CLEAN!');
    };
  }, []);

  const handleGoHome = () => history.push('/');

  return (
    <div>
      <h3>Add User</h3>
      <button type="button" onClick={handleGoHome}>
        Go Home
      </button>
      <ul>
        {posts.length > 0
          ? posts.map((p) => {
              return <li key={p.id}>{p.title}</li>;
            })
          : ''}
      </ul>
      <hr />

      <ul>
        <ChildOfAdd todos={todos} />
      </ul>
    </div>
  );
}
