const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white mt-10'>
      <div className='container py-10 grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div>
          <h2 className='text-xl font-bold text-purple-500'>MyBlog</h2>
          <p className='text-sm mt-2 text-gray-400'>Your go-to blog for web dev insights and stories.</p>
        </div>
      </div>
      <div className='border-t border-gray-700 py-4 text-center text-sm text-gray-500'>
        &copy; {new Date().getFullYear()} MyBlog. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
