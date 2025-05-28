import Image from "next/image";

export default function W2() {
  return (
    <main className="flex flex-col items-center justify-between p-4 sm:p-6 md:p-8 overflow-hidden mx-auto">
      <div className="flex w-full max-w-[1080px] flex-col space-y-6">
        <p className="text-xl leading-relaxed">this is live
        </p>
        <p> <img src="/images/W2/paint1_phone.jpg" alt="Description of Image6"></img></p>
        <p className="text-xl leading-relaxed"> 05.28.2025 EK </p>
      </div>
    </main>
  );
}
