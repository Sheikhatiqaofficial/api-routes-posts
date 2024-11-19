
import FetchPosts from "./fetch-posts/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col justify-center items-center py-10 px-5">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-indigo-600">Welcome to My Blog</h1>
        <p className="mt-2 text-lg text-gray-600">A collection of interesting posts</p>
      </header>

      <main className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
        <FetchPosts />  
      </main>

      <footer className="mt-10 text-center text-sm text-gray-500">
        <p>&copy; 2024 My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}
