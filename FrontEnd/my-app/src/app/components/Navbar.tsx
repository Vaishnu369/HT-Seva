import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-purple-700 text-white px-6 py-3 flex justify-between items-center shadow">
      {/* Left: Logo + Title */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 flex items-center justify-center bg-yellow-400 rounded-full text-black font-bold">
          HT
        </div>
        <span className="font-semibold text-lg">
          Admin Dashboard - Happy Thoughts
        </span>
      </div>

      {/* Middle: Navigation Links */}
      <div className="hidden md:flex gap-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/" className="hover:underline">
          Dashboard
        </Link>
        <Link href="/participants" className="hover:underline">
          Participants
        </Link>
        <Link href="/notifications" className="hover:underline">
          Notifications
        </Link>
      </div>

      {/* Right: Logout + Profile */}
      <div className="flex items-center gap-4">
        <Link
          href="/logout"
          className="px-4 py-1 bg-white text-purple-700 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Logout
        </Link>
        <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
          <img
            src="https://i.pravatar.cc/40"
            alt="Profile"
            className="rounded-full"
          />
        </div>
      </div>
    </nav>
  );
}
