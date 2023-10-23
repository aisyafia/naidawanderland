import Image from "next/image";
import Hero from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <main className="padding-y">
      <div>
        <Hero />
        <div className="mt-5 padding-x padding-y">
          <div className="home__text-container bg-sky-200 rounded-xl px-6 py-8">
            <h2 className="font-lulo">Special Offers</h2>
            <h4>
              Come meet us at the dive & travel exhibition, and get the best
              offers from us!
            </h4>

            <div className="flex flex-cols justify-center align-center">
              <div className="max-w-[600px] padding-x padding-y">
                <h3 className="font-bold">DRT SHOW HONG KONG</h3>
                <br />
                <h5>
                  15-17 DECEMBER 2023, Hong Kong Convention and Exhibition
                  Center
                </h5>
                <br />
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
          <div className="customer-review">
            <div className="review-title">
              <h2 className="text-2xl font-semibold">
                What makes our travellers happy:
              </h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
