'use client'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-red-500">Something went wrong!</h2>
      <button onClick={() => reset()} className="mt-4 p-2 bg-blue-600 text-white rounded">
        Try again
      </button>
    </div>
  );
}