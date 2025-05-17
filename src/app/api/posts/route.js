let posts = [
  {
    id: 1,
    slug: '1',
    title: 'His mother had always taught him',
    body: 'His mother had always taught him not to ever think of himself as better than others. He would tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.',
    tags: ['history', 'american', 'crime'],
    views: 10,
    reactions: { likes: 5, dislikes: 0 },
    createdAt: '2025-05-17T10:00:00Z',
  },
  {
    id: 2,
    slug: '2',
    title: 'He was an expert but not in a discipline',
    body: 'He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.',
    tags: ['french', 'fiction', 'english'],
    views: 20,
    reactions: { likes: 10, dislikes: 1 },
    createdAt: '2025-05-17T10:00:00Z',
  },
  {
    id: 3,
    slug: '2',
    title: 'Dave watched as the forest burned up on the hill.',
    body: 'Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they could not leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.',
    tags: ['magical', 'history', 'french'],
    views: 20,
    reactions: { likes: 10, dislikes: 1 },
    createdAt: '2025-05-17T10:00:00Z',
  },
];

// GET to fetch all posts
export async function GET() {
  return new Response(JSON.stringify({ posts }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

// POST to add a post
export async function POST(request) {
  const { title, body } = await request.json();

  if (!title || !body) {
    return new Response(JSON.stringify({ error: 'Title and body are required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const slug = String(posts.length + 1);
  const newPost = {
    id: posts.length + 1,
    slug,
    title,
    body,
    tags: [],
    views: 0,
    reactions: { likes: 0, dislikes: 0 },
    createdAt: new Date().toISOString(),
  };
  posts.push(newPost);

  return new Response(JSON.stringify(newPost), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}
