import { useSearchParams } from 'react-router-dom';
import PostList from './PostList.jsx';
import SearchBar from './SearchBar.jsx';

export default function BlogPosts({ posts }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('filter') || '';
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleSearchChange = (value) => {
    setSearchParams(value ? { filter: value } : {});
  };

  return (
    <section className="mt-5 rounded-md bg-white p-5 shadow-sm sm:p-6">
      <h1 className="mb-2 text-sm font-semibold text-slate-700">Blog Posts</h1>
      <SearchBar value={searchQuery} onChange={handleSearchChange} />
      <PostList posts={filteredPosts} />
    </section>
  );
}
