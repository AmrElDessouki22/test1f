'use client'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 p-4">
      <h2 className="text-lg font-semibold">Categories</h2>
      <ul>
        <li>Work</li>
        <li>Personal</li>
        <li>Archive</li>
      </ul>
    </aside>
  );
}