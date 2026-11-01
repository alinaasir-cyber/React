import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreatePost({ onCreatePost }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreatePost({ title: title.trim(), content: content.trim() });
    navigate('/');
  };

  return (
    <section className="mt-5 rounded-md bg-white p-5 shadow-sm sm:p-6">
      <h1 className="mb-4 text-base font-semibold text-slate-700">
        Create New Post
      </h1>
      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <div>
          <label
            htmlFor="post-title"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Title
          </label>
          <input
            id="post-title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
            className="w-full rounded border border-slate-300 px-3 py-2 text-sm outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
          />
        </div>
        <div>
          <label
            htmlFor="post-content"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Content
          </label>
          <textarea
            id="post-content"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            required
            rows={5}
            className="w-full resize-y rounded border border-slate-300 px-3 py-2 text-sm outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded bg-sky-600 py-2 text-sm font-medium text-white transition hover:bg-sky-700"
        >
          Publish Post
        </button>
      </form>
    </section>
  );
}
