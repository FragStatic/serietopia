/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { useRef } from "react";
import Carousel from "./components/Carousel";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <video
        src="/test.mp4"
        autoPlay={true}
        loop
        className="absolute h-screen w-screen object-cover -z-10 top-0 left-0"
      ></video>

      <header className="fixed top-0 w-full h-16 border-white bg-mainBgGrey z-20">
        <div className="flex px-24 h-full justify-between">
          <div className="flex items-center">
            <div className="text-4xl mr-16 text-logoColor">SERIETOPIA</div>
            <div className="text-2xl mr-12 text-navTextColor">Genres</div>
            <div className="text-2xl mr-12 text-navTextColor">New</div>
            <div className="text-2xl mr-12 text-navTextColor">Popular</div>
          </div>
          <div className="inline-flex">
            <svg className="w-7 mr-4">
              <use xlinkHref="/sprites.svg#search"></use>
            </svg>
            <input
              type="text"
              placeholder="pis suni loh"
              className="h-10 w-64 self-center rounded-md p-2"
            ></input>
          </div>
        </div>
      </header>
      <main className="flex min-h-screen min-w-screen flex-col items-center justify-between">
        <div className="flex flex-col items-start justify-end w-full h-screen bg-gradient-to-tr from-mainBgGrey from-35% p-28 text-colorWhite">
          <div className="w-1/3">
            <div className="text-6xl">Shogun</div>
            <div className="inline-flex subtext mt-2 text-md">
              <div className="inline-flex genres">
                <div className="border rounded-md mr-1 px-1">{"Adventure"}</div>
                <div className="border rounded-md mr-1 px-1">{"Drama"}</div>
                <div className="border rounded-md mr-1 px-1">{"History"}</div>
              </div>
              <div className="ml-8">10 hours</div>
            </div>
            <div className="mt-4 mb-4">
              Set in the 17th Century, the story is told from the perspective of
              British hero John Blackthorne, a sailor who rises from outsider to
              samurai, while being used as a pawn in Japanese leader Toranagas
              struggle to reach the top of the ruling chain, or Shogun.
            </div>
            <button
              type="button"
              className="bg-colorWhite rounded-md w-40 h-12 text-xl text-colorBlack"
            >
              Watch episode 1
            </button>
          </div>
          <button
            className="rounded-full border size-12 self-center"
            onClick={() => {
              window.scrollBy(0, window.innerHeight - 64 - window.scrollY);
            }}
          >
            ASD
          </button>
        </div>
        <div className="relative w-full">
          <div className="flex list-title h-16 w-full px-24 text-colorWhite">
            <span className="self-end text-3xl">Latest releases</span>
          </div>
          <div
            className="flex flex-col overflow-x-scroll scroll-smooth flex-wrap h-88 px-8 no-scrollbar justify-center -mt-4"
            ref={scrollRef}
          >
            <button
              className="absolute size-10 rounded-full end-4 top-48 z-10 bg-mainBgGrey text-colorWhite text-2xl"
              onClick={() => {
                scrollRef.current?.scrollBy(window.innerWidth, 0);
              }}
            >
              {">"}
            </button>
            <button
              className="absolute size-10 rounded-full start-4 top-48 z-10 bg-mainBgGrey text-colorWhite text-2xl"
              onClick={() => {
                scrollRef.current?.scrollBy(-window.innerWidth, 0);
              }}
            >
              {"<"}
            </button>
            <div className="relative mr-1 transition hover:scale-110">
              <div className="absolute text-colorWhite w-64 h-20 bottom-0 visible-on-parent-hover bg-colorBlackWithOpacity overflow-hidden">
                <hr className="text-logoColor border-t-2" />
                <div className="show-card-details-on-grandparent-hover px-4 w-full">
                  <div className="inline-flex text-xs mt-2">
                    <div className="border rounded-md mr-1 px-1">Adventure</div>
                    <div className="border rounded-md mr-1 px-1">Drama</div>
                    <div className="border rounded-md mr-1 px-1">History</div>
                    <div className="px-1">10 hours</div>
                  </div>
                  <div className="text-2xl">Shogun</div>
                </div>
              </div>
              <Image
                src={
                  "https://m.media-amazon.com/images/M/MV5BMzhkNzVkNDYtNmE2Zi00ZTk1LTk2OWYtOTU5NWM5OWQ2Zjc0XkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg"
                }
                alt="/noImage.jpg"
                width={256}
                height={320}
                className="rounded-lg h-80 w-64"
              />
            </div>
            <div className="mr-1 transition hover:scale-110">
              <Image
                src={
                  "https://m.media-amazon.com/images/M/MV5BZjE0MjBkNWMtOGUzZS00MzMyLTgwYjgtNTBkZWQ5YWRlMmM1XkEyXkFqcGc@._V1_SX300.jpg"
                }
                alt="/noImage.jpg"
                width={256}
                height={320}
                className="rounded-lg h-80 w-64"
              />
            </div>
            <div className="mr-1 transition hover:scale-110">
              <Image
                src={
                  "https://m.media-amazon.com/images/M/MV5BYTc1MDQ3NjAtOWEzMi00YzE1LWI2OWUtNjQ0OWJkMzI3MDhmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
                }
                alt="/noImage.jpg"
                width={256}
                height={320}
                className="rounded-lg h-80 w-64"
              />
            </div>
            <div className=" mr-1 transition hover:scale-110">
              <Image
                src={
                  "https://m.media-amazon.com/images/M/MV5BZGI4NTEwNTAtZDcwMi00MDkxLTg1OGYtNTZmMzE3ZDljNzVlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg"
                }
                alt="/noImage.jpg"
                width={256}
                height={320}
                className="rounded-lg h-80 w-64"
              />
            </div>
            <div className=" mr-1 transition hover:scale-110">
              <Image
                src={
                  "https://m.media-amazon.com/images/M/MV5BZGFmN2Q0NDYtYjI5OS00MDA5LThjYTctNTFiY2ZmMDNkNjAwXkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_SX300.jpg"
                }
                alt="/noImage.jpg"
                width={256}
                height={320}
                className="rounded-lg h-80 w-64"
              />
            </div>
            <div className=" mr-1 transition hover:scale-110">
              <Image
                src={
                  "https://m.media-amazon.com/images/M/MV5BYzljOTBhMzUtNjEwYy00ZDEyLTg4YjYtZjQ0Nzk2MzZmMzg1XkEyXkFqcGdeQXVyMjkwNjg2NjY@._V1_SX300.jpg"
                }
                alt="/noImage.jpg"
                width={256}
                height={320}
                className="rounded-lg h-80 w-64"
              />
            </div>
            <div className=" mr-1 transition hover:scale-110">
              <Image
                src={
                  "https://m.media-amazon.com/images/M/MV5BMjA5ZjA3ZjMtMzg2ZC00ZDc4LTk3MTctYTE1ZTUzZDIzMjQyXkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_SX300.jpg"
                }
                alt="/noImage.jpg"
                width={256}
                height={320}
                className="rounded-lg h-80 w-64"
              />
            </div>
            <div className=" mr-1 transition hover:scale-110">
              <Image
                src={
                  "https://m.media-amazon.com/images/M/MV5BZDdlNTIwNjYtNzVhNS00MGVmLTk1ZGYtZmZiMjhiMmQ1ZjkwXkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_SX300.jpg"
                }
                alt="/noImage.jpg"
                width={256}
                height={320}
                className="rounded-lg h-80 w-64"
              />
            </div>
          </div>
        </div>
        <Carousel carouselName={"Popular"} />
        <div className="genres w-full">
          <div className="list-title border h-16 w-full"></div>
          <div className="list border h-80 w-full"></div>
        </div>
      </main>
      <footer className="w-full h-24 border">
        <div className="text">Generic movie website clone</div>
        <div className="contact"></div>
      </footer>
    </>
  );
}
