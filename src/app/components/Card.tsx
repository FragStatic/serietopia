import Image from "next/image";

export default function Card() {
  return (
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
  );
}
