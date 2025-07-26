import Header from '@/components/ui/Header';
import Sidebar from '@/components/ui/Sidebar';
import NotesList from '@/components/notes/NotesList';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <NotesList />
        </main>
      </div>
    </div>
  );
}