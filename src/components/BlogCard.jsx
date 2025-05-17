import Link from 'next/link';
import { DislikeIcon, EyeIcon, LikeIcon } from './Icon';
import { formatDate } from '../utils/formatDate';

const BlogCard = ({ tags, title, views, reactions, id, createdAt }) => {
  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-md transition-all flex flex-col'>
      <img
        src={`https://picsum.photos/seed/${Math.random()}/600/400`}
        alt={title}
        className='w-full h-48 object-cover'
      />
      <div className='p-4 flex flex-col justify-between flex-grow'>
        <h3 className='text-lg font-semibold text-gray-500'>{title}</h3>
        <p className='text-xBlogCards text-gray-400 mt-1'>Published on {formatDate(createdAt)}</p>
        <div className='flex items-center gap-4 mt-3 text-gray-600 text-sm'>
          <div className='flex items-center gap-1'>
            <EyeIcon />
            <span>{views}</span>
          </div>
          <div className='flex items-center gap-1'>
            <LikeIcon />
            <span>{reactions.likes}</span>
          </div>
          <div className='flex items-center gap-1'>
            <DislikeIcon />
            <span>{reactions.dislikes}</span>
          </div>
        </div>

        <div className='flex flex-wrap gap-2 mt-4'>
          {tags.length > 0 ? (
            tags.map((tag, index) => (
              <span
                key={index}
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
        <Link href={`/posts/${id}`} className='my-4 mx-1'>
          <p className='inline-flex items-center gap-1 text-sm font-bold text-purple-600 hover:text-purple-800 hover:underline transition-colors duration-200'>
            <span>Read More</span>
            <span className='transition-transform duration-200'>→</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
