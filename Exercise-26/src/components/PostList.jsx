import { Link } from 'react-router-dom';

export default function PostList({ posts }) {
  if (posts.length === 0) {
    return <p className="mt-2 text-sm text-slate-500">No posts found.</p>;
  }

  return (
    <ul className="mt-1 select-none space-y-1.5">
      {posts.map((post) => (
        <li key={post.id}>
          <Link
            to={`/posts/${post.id}`}
            className="text-sm text-sky-600 hover:underline"
          >
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
