import { Link, useParams } from 'react-router-dom';

export default function PostDetail({ posts }) {
  const { id } = useParams();
  const post = posts.find((item) => String(item.id) === id);

  if (!post) {
    return (
      <section className="mt-5 rounded-md bg-white p-6 text-center shadow-sm">
        <p className="font-semibold text-red-500">Post not found!</p>
        <Link to="/" className="mt-3 inline-block text-sky-600 hover:underline">
          Back to Posts
        </Link>
      </section>
    );
  }

  return (
    <article className="mt-5 rounded-md bg-white p-6 shadow-sm">
      <Link to="/" className="mb-4 inline-block text-sm text-sky-600 hover:underline">
        &larr; Back to Posts
      </Link>
      <h1 className="mb-2 text-xl font-semibold text-slate-800">{post.title}</h1>
      <p className="text-sm leading-relaxed text-slate-600">{post.content}</p>
    </article>
  );
}
