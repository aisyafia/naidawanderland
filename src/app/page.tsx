import Image from "next/image";
import Hero from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <Hero />

        <div className="mt-5 padding-x padding-y max-width" id="discover">
          <div className="home__text-container">
            <h2 className="font-lulo">Special Offers</h2>
            <h4>
              Come meet us at the dive & travel exhibition, and get the best
              offers from us!
            </h4>

            <div className="flex flex-cols justify-center align-center">
              <div className="max-w-[600px] padding-x">
                <h3>DRT SHOW HONG KONG</h3>
                <h5>
                  15-17 DECEMBER 2023, Hong Kong Convention and Exhibition
                  Center
                </h5>
                <p>
                  As you know, DRT SHOW HONG KONG 2023, The largest diving expo
                  in Asia is almost upon us (15-17 December). NAIDA is one of
                  the exhibitors this year, where we will be presenting some of
                  our diving trips to INDONESIA. Visit at booth #R289 and get
                  our super discount for your trip.
                </p>
              </div>
              <div className="padding-x">
                <Image
                  src="/hk-fair-pic.jpeg"
                  alt="Hong Kong Fair"
                  width={750}
                  height={500}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full min-h-screen my-8 relative">
          <div className="px-3 z-100">
            <div className="font-lulo text-2xl sm:text-4xl md:text-6xl pt-4">
              Explore the underwater beauty of Indonesia
            </div>
            <p>Photo by Ferry Mozard</p>
          </div>
          <Image
            src="/underwater-cage.jpg"
            alt="Underwater cage"
            width={2500}
            height={1668}
          />
        </div>
        <div className="font-lulo text-xl mb-4 sm:text-2xl md:text-4xl pt-4">
          Discover our dive trip destinations
        </div>
        <div>
          <Link href="/services">
            <button className="custom-btn border-2">Trip Destinations</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
