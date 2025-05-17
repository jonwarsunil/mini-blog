'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '../../components/Button';

export default function NewPostPage() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const router = useRouter();

  const handleSubmit = async e => {
    e.preventDefault();
    const createdAt = new Date().toISOString();
    const res = await fetch('http://localhost:3000/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, body, createdAt }),
    });
    if (res.ok) {
      router.push('/');
    } else {
      alert('Failed to create post');
    }
  };

  return (
    <div className='container'>
      <div className='px-4 sm:px-6 py-6'>
        <Button label='← Back' href='/' />
      </div>
      <div className='max-w-xl mx-auto py-10'>
        <h1 className='text-3xl font-bold text-center text-purple-800 mb-6'>Create New Post</h1>
        <form onSubmit={handleSubmit} className='bg-white shadow-lg rounded-lg p-6 space-y-5'>
          <div>
            <label htmlFor='title' className='block text-sm font-bold text-gray-700 mb-1'>
              Title
            </label>
            <input
              id='title'
              type='text'
              placeholder='Enter post title'
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300 transition'
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor='body' className='block text-sm font-bold text-gray-700 mb-1'>
              Body
            </label>
            <textarea
              id='body'
              placeholder='Write your post...'
              rows={5}
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300 transition resize-none'
              value={body}
              onChange={e => setBody(e.target.value)}
              required
            />
          </div>

          <div className='text-right'>
            <Button label='Publish Post' type='submit' />
          </div>
        </form>
      </div>
    </div>
  );
}
