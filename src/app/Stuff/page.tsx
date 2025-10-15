"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Stuff() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-between p-4 sm:p-6 md:p-8 overflow-hidden mx-auto">
      <div className="flex w-full max-w-[1080px] flex-col space-y-6">
          <div className="flex flex-col items-center">
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
              onClick={() => router.push("/Stuff/Photos")}
    
            />
            <Image
              src="/images/Week21_Logo.svg"
              alt="Stuff"
              width={200}
              height={100}
              className="cursor-pointer"
              onClick={() => router.push("/Stuff/W21")}
            />
            <Image
              src="/images/Week20_Logo.svg"
              alt="Stuff"
              width={200}
              height={100}
              className="cursor-pointer"
              onClick={() => router.push("/Stuff/W20")}
            />
            <Image
              src="/images/Week19_Logo.svg"
              alt="Stuff"
              width={200}
              height={100}
              className="cursor-pointer"
              onClick={() => router.push("/Stuff/W19")}
            />
            <Image
              src="/images/Week18_Logo.svg"
              alt="Stuff"
              width={200}
              height={100}
              className="cursor-pointer"
              onClick={() => router.push("/Stuff/W18")}
            />
            <Image
              src="/images/Week17_Logo.svg"
              alt="Stuff"
              width={200}
              height={100}
              className="cursor-pointer"
              onClick={() => router.push("/Stuff/W17")}
            />
            <Image
              src="/images/Week16_Logo.svg"
              alt="Stuff"
              width={200}
              height={100}
              className="cursor-pointer"
              onClick={() => router.push("/Stuff/W16")}
            />
            <Image
              src="/images/Week15_Logo.svg"
              alt="Stuff"
              width={200}
              height={100}
              className="cursor-pointer"
              onClick={() => router.push("/Stuff/W15")}
            />
            <Image
              src="/images/Week14_Logo.svg"
              alt="Stuff"
              width={200}
              height={100}
              className="cursor-pointer"
              onClick={() => router.push("/Stuff/W14")}
            />
            <Image
              src="/images/Week13_Logo.svg"
              alt="Stuff"
              width={200}
              height={100}
              className="cursor-pointer"
              onClick={() => router.push("/Stuff/W13")}
            />
            <Image
              src="/images/Week12_Logo.svg"
              alt="Stuff"
              width={200}
              height={100}
              className="cursor-pointer"
              onClick={() => router.push("/Stuff/W12")}
            />
            <Image
              src="/images/Week11_Logo.svg"
              alt="Stuff"
              width={200}
              height={100}
              className="cursor-pointer"
              onClick={() => router.push("/Stuff/W11")}
            />
            <Image
              src="/images/Week10_Logo.svg"
              alt="Stuff"
              width={200}
              height={100}
              className="cursor-pointer"
              onClick={() => router.push("/Stuff/W10")}
            /> 
            <Image
              src="/images/Week9_Logo.svg"
              alt="Stuff"
              width={200}
              height={100}
              className="cursor-pointer"
              onClick={() => router.push("/Stuff/W9")}
            /> 
            <Image
              src="/images/Week8_Logo.svg"
              alt="Stuff"
              width={200}
              height={100}
              className="cursor-pointer"
              onClick={() => router.push("/Stuff/W8")}
            /> 
            <Image
              src="/images/Week7_Logo.svg"
              alt="Stuff"
              width={200}
              height={100}
              className="cursor-pointer"
              onClick={() => router.push("/Stuff/W7")}
            /> 
            <Image
              src="/images/Week6_Logo.svg"
              alt="Stuff"
              width={200}
              height={100}
              className="cursor-pointer"
              onClick={() => router.push("/Stuff/W6")}
            /> 
            <Image
              src="/images/Week5_Logo.svg"
              alt="Stuff"
              width={200}
              height={100}
              className="cursor-pointer"
              onClick={() => router.push("/Stuff/W5")}
            /> 
            <Image
              src="/images/Week4_Logo.svg"
              alt="Stuff"
              width={200}
              height={100}
              className="cursor-pointer"
              onClick={() => router.push("/Stuff/W4")}
            /> 
             <Image
              src="/images/Week3_Logo.svg"
              alt="Stuff"
              width={200}
              height={100}
              className="cursor-pointer"
              onClick={() => router.push("/Stuff/W3")}
            /> 
             <Image
              src="/images/Week2_Logo.svg"
              alt="Stuff"
              width={200}
              height={100}
              className="cursor-pointer"
              onClick={() => router.push("/Stuff/W2")}
            />
             <Image
              src="/images/Week1_Logo.svg"
              alt="Stuff"
              width={200}
              height={100}
              className="cursor-pointer"
              onClick={() => router.push("/Stuff/W1")}
            /> 
          </div>
      </div>
    </main>
  );
}