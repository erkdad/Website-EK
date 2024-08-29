"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Stuff() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-between p-4 sm:p-6 md:p-8 overflow-hidden mx-auto">
      <div className="flex w-full max-w-[1080px] flex-col space-y-6">
          <div className="w-24">
            <Image
              src="/images/VideoIMG.svg"
              alt="Stuff"
              width={100}
              height={100}
              className="cursor-pointer"
              onClick={() => router.push("/Stuff/videos")}
            />
            <p className="flex justify-center">_001</p>
          </div>
          <div className="w-24">
            <Image
              src="/images/PhotoIMG.svg"
              alt="Stuff"
              width={100}
              height={100}
              className="cursor-pointer"
              onClick={() => router.push("/Stuff/videos")}
            />
            <p className="flex justify-center">_002</p>
          </div>
      </div>
    </main>
  );
}
