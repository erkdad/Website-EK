export default function Videos() {
  return (
    <main className="flex flex-col items-center justify-between p-4 sm:p-6 md:p-8 overflow-hidden mx-auto">
      <div className="flex w-full max-w-[1080px] flex-col space-y-6">
        <p className="text-xl leading-relaxed">Videos: MAYBE A WATCHLIST</p>
        <iframe width="560" height="315" 
        src="https://youtu.be/k9Oik67BATM?si=DunPx_J_tNxUsghK" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
      </div>
    </main>
  );
}
