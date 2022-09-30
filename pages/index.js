import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Home({ data }) {
  const [search, setSearch] = useState("");
  function onChangeHandler(e) {
    setSearch(e.target.value);
  }
  return (
    <div>
      <Head>
        <title>{`the.Weather App`}</title>
        <meta name="description" content="Weather app coded by Can Tutar." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <h1 className="text-6xl font-bold">Welcome to the Weather App</h1>
            <div className="row col-8 mx-auto">
              <input
                type="text"
                name="Search"
                id="Search"
                value={search}
                onChange={onChangeHandler}
              />
            </div>
            <div className="row">
              <Link href={`/${search}`}>
                <a className="btn btn-dark col-3 mx-auto mt-5">Search</a>
              </Link>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
