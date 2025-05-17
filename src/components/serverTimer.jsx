export const dynamic = 'force-dynamic';

export default async function ServerTimePage() {
  const now = new Date().toLocaleString();
  return (
    <div className='flex justify-end'>
      <div className='bg-white rounded-lg text-center mb-2'>
        <p className='text-base font-medium text-gray-500'>{now}</p>
      </div>
    </div>
  );
}
