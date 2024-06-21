export default function Home() {
  return (
    <>
      <video
        src="/test.mp4"
        autoPlay={true}
        loop
        className="absolute h-screen w-screen object-cover -z-10 top-0 left-0"
      ></video>

      <header className="fixed top-0 w-full h-16 border-white bg-mainBgGrey">
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
            <div className="title text-6xl">Shogun</div>
            <div className="inline-flex subtext mt-2 text-md">
              <div className="inline-flex genres">
                <div className="genre border rounded-md mr-1 px-1">
                  {"Adventure "}
                </div>
                <div className="genre border rounded-md mr-1 px-1">
                  {"Drama "}
                </div>
                <div className="genre border rounded-md mr-1 px-1 self-end">
                  {"History "}
                </div>
              </div>
              <div className="runtime ml-8">10 hours</div>
            </div>
            <div className="synopsis mt-4 mb-4">
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
          <button className="rounded-full border size-12 self-center">
            ASD
          </button>
        </div>
        <div className="latest w-full">
          <div className="list-title border h-16 w-full">Latest releases</div>
          <div className="list border h-80 w-full"></div>
        </div>
        <div className="popular w-full">
          <div className="list-title border h-16 w-full"></div>
          <div className="list border h-80 w-full"></div>
        </div>
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
