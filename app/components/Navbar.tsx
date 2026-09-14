import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-slate-900 tracking-tight">
          Refi<span className="text-blue-600">Trust</span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium text-slate-600">
          <Link href="/about" className="hover:text-blue-600 transition">
            About Us & Licensing
          </Link>
          <Link href="/brands" className="hover:text-blue-600 transition">
            Our Brands
          </Link>
        </nav>
      </div>
    </header>
  );
}