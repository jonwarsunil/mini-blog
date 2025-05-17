export function formatDate(dateString) {
  if (!dateString) return 'Unknown';
  const date = new Date(dateString);
  if (isNaN(date)) return 'Unknown';

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
