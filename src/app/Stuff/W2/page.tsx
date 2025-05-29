import Image from "next/image";

export default function W2() {
  return (
    <main className="flex flex-col items-center justify-between p-4 sm:p-6 md:p-8 overflow-hidden mx-auto">
      <div className="flex w-full max-w-[1080px] flex-col space-y-6">
        <p className="text-xl leading-relaxed">Week 2!!</p>

        <p className="text-xl leading-relaxed">This week is our last week at our spot in Tiny; Thunder Beach has been nice to us. Cant believe
          how fast these 5 month went by. Feels like Jan 1st was yesterday. Through all the snow storms, rainy days, and gorgeous sunny ones, this place built character.
          i am gonna miss being surrounded by wood, and feeling the airy high ceilings. We were living like royalty in 2025. Next stop Collingwood! 

        </p>

        <p className="text-xl leading-relaxed"> We had one last friend hangout on the weekend where some homies came up to ride bikes, chill lakeside, look at birds, and drink some pints.
        My first time seeing Henry in almost a year! he told us about his birding background and his sighting of the Quebecois *******. The crowd lit up on that one. found the sunshine on saturday
        evening after a rainy predicted weekend!</p>

        <p> <img src="/images/W2/Fwends.jpg" alt="Description of Image6"></img></p>
        <p className="flex flex-col items-center">
                    <Image
                      src="/images/W2/f1.jpg"
                      alt="Stuff"
                      width={100}
                      height={100}
                      />
        </p>
        <p className="text-xl leading-relaxed">Wanted to go out and paint a sloping landscape with Willamina. Her first Plein air!</p>
        <p> <img src="/images/W2/Paint1.jpg" alt="Description of Image6"></img></p>

        <p className="text-xl leading-relaxed">Kept up the stoke and went to paint the church in Lafontaine. Ended up finding this truck parked out back and couldnt help it.</p>
        <p> <img src="/images/W2/Paint2.jpg" alt="Description of Image6"></img></p>


        Also scanned some drawings 
        <p> <img src="/images/W2/SF Streetz.jpg" alt="Description of Image6"></img></p>
        <p> <img src="/images/W2/Bins.jpg" alt="Description of Image6"></img></p>

        <p className="text-xl leading-relaxed"> 05.28.2025 EK </p>
      </div>
    </main>
  );
}
