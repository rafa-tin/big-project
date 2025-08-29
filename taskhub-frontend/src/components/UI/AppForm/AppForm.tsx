export default function AppForm({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex xs:bg-red-500 justify-center items-center min-h-screen dark:bg-gray-900 text-white">
      <form className="flex flex-col justify-center gap-4 items-center w-full max-w-md h-auto dark:bg-gray-800 bg-white p-8 rounded-2xl border-1 dark:border-blue-500">
        {children}
      </form>
    </div>
  );
}
