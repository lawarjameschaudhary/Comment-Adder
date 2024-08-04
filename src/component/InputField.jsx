import React, { useState } from 'react';

const InputField = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && number.trim() && message.trim()) {
      const newComment = {
        id: Date.now(),
        name,
        number,
        message,
      };

      setComments([...comments, newComment]);

      setName('');
      setNumber('');
      setMessage('');
    }
  };

  const handleRemove = (id) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  return (
    <div className='flex justify-center items-center md:m-24 flex-col border-2 p-4 py-28 shadow-2xl shadow-black sm:m-10'>
      <div className='flex flex-col gap-4 w-[100%]'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
          <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} className='w-[100%] border-2 py-2 px-3 rounded-md'/>
          <input type="number" placeholder='0' value={number} onChange={(e) => setNumber(e.target.value)} className='w-[100%] px-3 border-2 py-2'
          />
          <textarea placeholder='Type some message here' value={message} onChange={(e) => setMessage(e.target.value)}  className='h-24 border-2 rounded-md px-3' ></textarea>
          <button type='submit' className='bg-blue-600 px-7 py-4 text-white rounded-md hover:bg-blue-900' >
            Add Comment
          </button>
        </form>

        {comments.length > 0 && (
          <div className='w-[100%] border-2 p-4'>
            {comments.map((comment) => (
              <div key={comment.id} className='border-b-2 pb-4 mb-4'>
                <h1 className='text-2xl'>{comment.name}</h1>
                <img src="./src/assets/pngwing.com.png" alt="rating" width='8%' />
                <p className='text-slate-400'>{comment.message}</p>
                <button  onClick={() => handleRemove(comment.id)} className='bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-900 mt-2'>
                  Delete
                </button> 
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField;
