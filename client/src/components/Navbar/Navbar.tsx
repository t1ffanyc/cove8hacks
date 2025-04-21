export default function Navbar() {
  return (
    <nav className="px-4 py-4 shadow-lg bg-white">
      <div className="grid grid-cols-3 items-center max-w-7xl mx-auto">
        {/* our logo in the top left */}
        <div className="flex items-center">
          <span className="w-8 h-8 rounded-full bg-black block"></span>
          <p className="ml-3 font-semibold">cove8hacks</p>
        </div>

        {/* main buttons */}
        <ul className="flex justify-end items-center gap-20 text-gray-700 font-medium">
          <li><a href="#">home</a></li>
          <li><a href="#">about</a></li>
          <li><a href="#">contact</a></li>
        </ul>

        {/* login and sign up buttons */}
        <div className="flex justify-end items-center gap-3">
          <button className="px-4 py-2">login</button>
          <button className="bg-red-200 rounded-lg px-4 py-2">sign up</button>
        </div>
      </div>
    </nav>
  );
}