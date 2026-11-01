import { Link, NavLink } from 'react-router-dom';

const navigationLinkClass = ({ isActive }) =>
  `rounded px-3 py-1.5 text-sm transition ${
    isActive
      ? 'bg-sky-600 text-white hover:bg-sky-700'
      : 'text-slate-700 hover:bg-slate-200'
  }`;

export default function Navbar({ isLoggedIn, onLogin, onLogout }) {
  return (
    <header className="mx-auto max-w-4xl px-4 pt-5 sm:px-6">
      <div className="border-b border-slate-200 pb-3">
        <Link to="/" className="inline-block text-sm font-semibold text-slate-700">
          React Blog
        </Link>
        <nav aria-label="Main navigation" className="mt-2 flex items-center gap-2">
          <NavLink to="/" end className={navigationLinkClass}>
            Home
          </NavLink>
          <NavLink to="/create" className={navigationLinkClass}>
            Create Post
          </NavLink>
          {isLoggedIn ? (
            <button
              type="button"
              onClick={onLogout}
              className="rounded bg-red-500 px-3 py-1.5 text-sm text-white transition hover:bg-red-600"
            >
              Logout
            </button>
          ) : (
            <button
              type="button"
              onClick={onLogin}
              className="rounded bg-sky-600 px-3 py-1.5 text-sm text-white transition hover:bg-sky-700"
            >
              Login
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
