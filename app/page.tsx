import WaitlistForm from "@/components/waitlist-form"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 p-4">
      <div className="max-w-2xl w-full bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
        <div className="p-8 md:p-10">
          {/* Title Section */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-300 text-sm font-medium mb-4">
              <span>⏳ Coming Soon</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              From Code to <span className="text-teal-600 dark:text-teal-400">Profitable Business</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-300">
              A practical course for developers who want to build, launch, and grow their own software products
            </p>
          </div>

          {/* Story Section */}
          <div className="mb-8 bg-slate-50 dark:bg-slate-700/30 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
            <p className="text-slate-700 dark:text-slate-300 italic mb-4">
              "Back when I built my first food ordering app, I was doing everything — coding, testing, support… you name
              it.
            </p>
            <p className="text-slate-700 dark:text-slate-300 italic mb-4">
              One customer called in and, clearly unaware I was the developer, insisted I take his order manually
              because "the app doesn't work."
            </p>
            <p className="text-slate-700 dark:text-slate-300 italic mb-4">
              In a moment of panic and confusion… I did. I wrote down "2 medium burgers, no onions" right next to my bug
              notes.
            </p>
            <p className="text-slate-700 dark:text-slate-300 italic mb-4">
              Then I fired up Postman, manually injected the order into the system, and voilà — the restaurant got it.
            </p>
            <p className="text-slate-700 dark:text-slate-300 italic">
              That was my first taste of full-stack everything. 😅"
            </p>
          </div>

          {/* Form Section */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Join the waitlist for early access
            </h2>
            <WaitlistForm />
          </div>
        </div>
      </div>

      <p className="mt-8 text-sm text-slate-500 dark:text-slate-400 text-center">
        © {new Date().getFullYear()} From Code to Profitable Business. All rights reserved.
      </p>
    </div>
  )
}

