export default function SearchBar({ value, onChange }) {
  return (
    <form onSubmit={(event) => event.preventDefault()} className="mb-1 max-w-md">
      <label htmlFor="post-search" className="sr-only">
        Search posts
      </label>
      <input
        id="post-search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search posts"
        className="mb-2 w-full rounded border border-sky-600 bg-white px-2 py-1.5 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-200"
      />
      <button
        type="submit"
        className="w-full rounded bg-sky-600 py-1.5 text-sm text-white transition hover:bg-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
      >
        Search
      </button>
    </form>
  );
}
