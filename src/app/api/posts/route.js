let posts = [
  {
    id: 1,
    slug: '1',
    title: 'His mother had always taught him',
    body: 'His mother had always taught him not to ever think of himself as better than others...',
    tags: ['history', 'american', 'crime'],
    views: 10,
    reactions: { likes: 5, dislikes: 0 },
    createdAt: '2025-05-17T10:00:00Z',
  },
  {
    id: 2,
    slug: '2',
    title: 'He was an expert but not in a discipline',
    body: 'He was an expert but not in a discipline that anyone could fully appreciate...',
    tags: ['french', 'fiction', 'english'],
    views: 20,
    reactions: { likes: 10, dislikes: 1 },
    createdAt: '2025-05-17T10:00:00Z',
  },
];

export async function GET() {
  return new Response(JSON.stringify({ posts }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request) {
  const body = await request.json();
  const { title, body: postBody } = body;

  if (!title || !postBody) {
    return new Response(JSON.stringify({ error: 'Title and body are required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const newPost = {
    id: posts.length + 1,
    slug: String(posts.length + 1),
    title,
    body: postBody,
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
