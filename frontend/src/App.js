import React, { useEffect, useState } from 'react'
import axios from 'axios'


const App = () => {

  const [blogs, setBlogs] = useState()

  const [author, setAuthor] = useState();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();


  useEffect(() => {
    get();

  }, [])

  const get = async () => {
    // const res = await axios.get("http://localhost:5000/");

    const response = await fetch("http://localhost:5000/");
    const data = response.json();
    setBlogs(data);
    console.log(blogs);
  }

  const handleSubmit = async (author, title, content) => {
    const response = await axios.post("http://localhost:5000/", (author, title, content));
    const data = response.data;
    console.log(data);

    console.log("Submitted");
  }

  return (
    <div className=' flex flex-col items-center min-h-screen'>
      <h1 className='font-bold text-2xl'>Blog Posts</h1>
      <p className='mt-16'>Previous Blogs</p>


      <div className='flex flex-col'>
        <h2 className='font-bold text-xl m-8'>Write your own blog here</h2>
        <form onSubmit={handleSubmit} className='p-3 border border-black flex flex-col space-y-5'>
          <input type='text' name='author' value={author} handleChange={(e) => setAuthor(e.target.value)} placeholder='Enter author name' className=' p-1 border border-black w-fit'></input>
          <input type='text' name='title' value={title} handleChange={(e) => setTitle(e.target.value)} placeholder='Enter title' className='p-1 border border-black w-fit'></input>

          <textarea placeholder='Enter content' name='content' handleChange={(e) => setContent(e.target.value)} value={content} className='p-1 border border-black w-fit'></textarea>
          <button type='submit' className='bg-green-500 w-fit rounded-xl p-2 text-white'>Submit</button>

        </form>
      </div>
    </div>
  )
}

export default App