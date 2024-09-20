import React, { useEffect, useState } from 'react'
import axios from 'axios'


const App = () => {

  const [blogs, setBlogs] = useState()

  const [formData, setFormData] = useState(
    "author",
    "title",
    "content"
  )

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

  const handleSubmit = () => {
    console.log("Submitted");
  }

  const handleInputChange = (e) => {
    const { author, title, content } = e.target.name;
    setFormData(e.target.value);
  }


  return (
    <div className=' flex flex-col items-center min-h-screen'>
      <h1 className='font-bold text-2xl'>Blog Posts</h1>
      <p className='mt-16'>Previous Blogs</p>


      <div className='flex flex-col'>
        <h2 className='font-bold text-xl m-8'>Write your own blog here</h2>
        <form onSubmit={handleSubmit} className='p-3 border border-black flex flex-col space-y-5'>
          <input type='text' name='author' value={formData.author} handleChange={handleInputChange} placeholder='Enter author name' className=' p-1 border border-black w-fit'></input>
          <input type='text' name='title' value={formData.title} handleChange={handleInputChange} placeholder='Enter title' className='p-1 border border-black w-fit'></input>

          <textarea placeholder='Enter content' name='content' handleChange={handleInputChange} value={formData.content} className='p-1 border border-black w-fit'></textarea>


        </form>
      </div>
    </div>
  )
}

export default App