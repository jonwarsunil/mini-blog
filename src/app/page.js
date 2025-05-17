import BlogCard from '../components/BlogCard.jsx';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseUrl}/api/posts`, {
    cache: 'no-store',
  });

  const data = await res.json();

  const quotes = await fetch('https://dummyjson.com/quotes');
  const quote = await quotes.json();

  const blogs = await fetch('https://dummyjson.com/posts?limit=10');
  const post = await blogs.json();

  return (
    <main>
      <div className='container'>
        <div className='min-h-screen px-4 sm:px-6 lg:px-8 py-20'>
          <div className='text-center mb-12'>
            <p className='text-xs uppercase text-purple-500 font-semibold'>Our blog</p>
            <h1 className='text-3xl sm:text-4xl font-bold text-gray-900 mt-2'>Resources and insights</h1>
            <blockquote className='italic mb-6 mt-2'>
              &ldquo;{quote.quotes[0].quote}&ldquo; - {quote.quotes[0].author}
            </blockquote>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {data.posts.map(post => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
