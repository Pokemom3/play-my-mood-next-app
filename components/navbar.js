import Link from 'next/link';

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>My Song List</h1>
      </div>
      <Link href="/">
        <a>Home/</a>
      </Link>
      <Link href="/about">
        <a>About/</a>
      </Link>
      <Link href="/mood/test">
        <a>Todays mood list/</a>
      </Link>
      <Link href="/favourites">
        <a> Favourites/</a>
      </Link>
      <Link href="/logout">Logout</Link>
      <Link href="/api/auth/logout">Logout</Link>
    </nav>
  );
};

export default NavBar;
