export default function Videos() {
  return (
    <main className="flex flex-col items-center justify-between p-4 sm:p-6 md:p-8 overflow-hidden mx-auto">
      <div className="flex w-full max-w-[1080px] flex-col space-y-6">
        <p className="text-xl leading-relaxed">Videos: MAYBE A WATCHLIST</p>
        <iframe
          width="max"
          height="500"
          src="https://www.youtube.com/embed/k9Oik67BATM?si=BOJhIZRheVbuTMXw"
        ></iframe>
      </div>
    </main>
  );
}
