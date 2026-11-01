import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BlogPosts from './components/BlogPosts.jsx';
import CreatePost from './components/CreatePost.jsx';
import Navbar from './components/Navbar.jsx';
import PostDetail from './components/PostDetail.jsx';
import { initialPosts } from './data/posts.js';

export default function App() {
  const [posts, setPosts] = useState(initialPosts);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const addPost = ({ title, content }) => {
    setPosts((currentPosts) => [
      ...currentPosts,
      { id: Date.now(), title, content },
    ]);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-100 font-sans text-sm text-slate-700">
        <Navbar
          isLoggedIn={isLoggedIn}
          onLogin={() => setIsLoggedIn(true)}
          onLogout={() => setIsLoggedIn(false)}
        />
        <main className="mx-auto max-w-4xl px-4 pb-10 sm:px-6">
          <Routes>
            <Route
              path="/"
              element={<BlogPosts posts={posts} />}
            />
            <Route
              path="/create"
              element={<CreatePost onCreatePost={addPost} />}
            />
            <Route
              path="/posts/:id"
              element={<PostDetail posts={posts} />}
            />
            <Route
              path="*"
              element={
                <section className="mt-6 rounded-md bg-white p-6 shadow-sm">
                  <h2 className="text-base font-medium text-slate-700">
                    Page not found
                  </h2>
                </section>
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
