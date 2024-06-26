"use client";
import { useRef } from "react";
import Card from "./Card";

//Check prop passing in NextJS docs. No way this is correct

export default function Carousel(props: { carouselName: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const test = [];

  for (let i = 0; i < 11; i++) {
    test.push(<Card key={i} />);
  }

  return (
    <div className="relative w-full">
      <div className="flex list-title h-16 w-full px-24 text-colorWhite">
        <span className="self-end text-3xl">{props.carouselName}</span>
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
        {test}
      </div>
    </div>
  );
}
