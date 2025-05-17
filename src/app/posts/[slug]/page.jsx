import Button from '../../../components/Button';
import ServerTimePage from '../../../components/serverTimer';
import { formatDate } from '../../../utils/formatDate';
import { posts } from '../../../../data/post.js';

export async function generateStaticParams() {
  return posts.map(post => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }) {
  const post = posts.find(p => p.slug === params.slug);

  if (!post) {
    return (
      <div className='flex text-lg flex-col justify-center items-center h-screen'>
        Post not found. <Button label='← Go Home' href='/' className='mt-4' />
      </div>
    );
  }

  return (
    <div className='container'>
      <div className='px-4 sm:px-6 py-6'>
        <Button label='← Back' href='/' />
      </div>
      <div className='max-w-2xl mx-auto p-4'>
        <ServerTimePage />
        <img
          src={`https://picsum.photos/seed/${post.id}/600/400`}
          alt='post-image'
          className='w-full h-64 object-cover'
        />
        <h1 className='text-2xl font-bold mb-2 mt-8'>{post.title}</h1>
        <p className='text-xs text-gray-400 mt-1'>Published on {formatDate(post.createdAt)}</p>
        <p className='text-gray-700 mb-4'>{post.body}</p>
        <div className='flex flex-wrap gap-2'>
          {post.tags && post.tags.length > 0 ? (
            post.tags.map(tag => (
              <span
                key={tag}
                className='text-sm sm:text-base bg-purple-100 text-purple-600 px-3 py-1 rounded-full font-medium'
              >
                #{tag}
              </span>
            ))
          ) : (
            <span className='text-sm sm:text-base bg-purple-100 text-purple-600 px-3 py-1 rounded-full font-medium'>
              #Updates
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
