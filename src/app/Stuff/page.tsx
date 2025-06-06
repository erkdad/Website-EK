"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Stuff() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-between p-4 sm:p-6 md:p-8 overflow-hidden mx-auto">
      <div className="flex w-full max-w-[1080px]">
            <Image
              src="/images/VideoIMG.svg"
              alt="Stuff"
              width={100}
              height={100}
              className="cursor-pointer"
              onClick={() => router.push("/Stuff/videos")}
            />
            <Image
              src="/images/PhotoIMG.svg"
              alt="Stuff"
              width={100}
              height={100}
              className="cursor-pointer"
              onClick={() => router.push("/Stuff/videos")}
            />
            <Image
              src="/images/Week1_Logo.svg"
              alt="Stuff"
              width={100}
              height={100}
              className="cursor-pointer"
              onClick={() => router.push("/Stuff/W1")}
            />
             <Image
              src="/images/Week2_Logo.svg"
              alt="Stuff"
              width={100}
              height={100}
              className="cursor-pointer"
              onClick={() => router.push("/Stuff/W2")}
            />
             <Image
              src="/images/Week3_Logo.svg"
              alt="Stuff"
              width={100}
              height={100}
              className="cursor-pointer"
              onClick={() => router.push("/Stuff/W3")}
            />  
          </div>
      </div>
    </main>
  );
}
