import Button from '../../../components/Button';
import ServerTimePage from '../../../components/serverTimer';
import { formatDate } from '../../../utils/formatDate';

export default async function PostPage({ params }) {
  const { slug } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return (
      <div className='flex text-lg flex-col justify-center items-center h-screen'>
        Failed to fetch post data.
        <Button label='← Go Home' href='/' className='mt-4' />
      </div>
    );
  }

  const { posts } = await res.json();
  const post = posts.find(p => p.slug === slug);

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
