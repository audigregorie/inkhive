import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex h-16 items-center justify-between md:h-20">
      <Link to="/" className="flex items-center gap-4">
        <h1 className="h-8 text-2xl font-bold">InkHive</h1>
      </Link>
      {/* Mobile */}
      <div className="md:hidden">
        <div onClick={() => setOpen((prev) => !prev)} className="cursor-pointer text-4xl">
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <div
          className={`absolute top-16 flex h-screen flex-col items-center justify-center gap-8 bg-[#e6e6ff] text-lg font-medium transition-all ease-in-out ${open ? '-right-0' : '-right-[100%]'}`}>
          <Link to="/">Home</Link>
          <Link to={'/'}>Trending</Link>
          <Link to={'/'}>Most Popular</Link>
          <Link to={'/'}>About</Link>
          <SignedOut>
            <Link to="/login" className="rounded-3xl bg-blue-800 px-4 py-2 text-white">
              Login 👋
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
      {/* Desktop */}
      <div className="hidden items-center gap-8 font-medium md:flex xl:gap-12">
        <Link to="/">Home</Link>
        <Link to={'/'}>Trending</Link>
        <Link to={'/'}>Most Popular</Link>
        <Link to={'/'}>About</Link>
        <SignedOut>
          <Link to="/login">
            <button className="rounded-3xl bg-blue-800 px-4 py-2 text-white">Login 👋</button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
