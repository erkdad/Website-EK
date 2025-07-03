import Image from "next/image";

export default function W7() {
  return (
    <main className="flex flex-col items-center justify-between p-4 sm:p-6 md:p-8 overflow-hidden mx-auto">
      <div className="flex w-full max-w-[1080px] flex-col space-y-6">
      <p> <img src="/images/W7/My Movie 7.mov" alt="Description of Image6"></img></p>

      <video controls autoplay>
      <source src="/images/W7/My Movie 7.mov" type="video/quicktime"></source>
      </video>
       <p className="text-xl leading-relaxed"> Week 7 and time do be flying!

        </p>
        <p className="text-xl leading-relaxed"> 07.03.2025 EK . Stayin curious!
        </p>
      </div>
    </main>
  );
}
