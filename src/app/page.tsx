export default function Home() {
  return (
    <>
      <header className="fixed top-0 w-full h-20 border-white bg-colorWhite ">
        <div className="flex px-24 h-full justify-between">
          <div className="flex items-center">
            <div className="text-4xl mr-16">SERIETOPIA</div>
            <div className="text-2xl mr-12">Genres</div>
            <div className="text-2xl mr-12">New</div>
            <div className="text-2xl mr-12">Popular</div>
          </div>
          <input
            type="text"
            placeholder="pis suni loh"
            className="h-10 w-64 self-center"
          ></input>
        </div>
      </header>
      <main className="flex min-h-screen min-w-screen flex-col items-center justify-between">
        <div className="flex items-center w-full h-screen bg-mainBgGrey p-28 text-colorWhite">
          <div className="data w-1/3">
            <div className="title">Shogun</div>
            <div className="inline-flex subtext">
              <div className="inline-flex genres">
                <div className="genre">{"Adventure "}</div>
                <div className="genre">{"Drama "}</div>
                <div className="genre">{"History "}</div>
              </div>
              <div className="runtime">10h</div>
            </div>
            <div className="synopsis">
              Set in the 17th Century, the story is told from the perspective of
              British hero John Blackthorne, a sailor who rises from outsider to
              samurai, while being used as a pawn in Japanese leader Toranagas
              struggle to reach the top of the ruling chain, or Shogun.
            </div>
            <button type="button">Watch</button>
          </div>
          <div className="moreContainer"></div>
        </div>
        <div className="latest w-full">
          <div className="list-title border h-16 w-full"></div>
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
