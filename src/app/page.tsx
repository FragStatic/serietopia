export default function Home() {
  return (
    <>
      <header></header>
      <main className="flex min-h-screen min-w-screen flex-col items-center justify-between">
        <div className="trending w-full h-screen bg-mainBgGrey"></div>
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
      <footer></footer>
    </>
  );
}
