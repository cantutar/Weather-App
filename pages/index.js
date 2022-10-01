import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import BackgroundImage from "../public/assets/images/bg.jpg";
import classes from "../components/Card.module.scss";
import gsap from "gsap";
import Transition from "../components/Transition";

export default function Home() {
  const [search, setSearch] = useState("");
  function onChangeHandler(e) {
    setSearch(e.target.value);
  }
  function onSubmitHandler(e) {
    e.preventDefault();
  }
  const TransitionDiv = useRef();
  const TransitionText = useRef();

  useEffect(() => {
    gsap
      .timeline()
      .to(TransitionText.current, {
        duration: 1.8,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        ease: "power2.out",
        delay: 0.5,
      })
      .to(TransitionDiv.current, {
        duration: 2.5,
        y: "100%",
        delay: 2,
        ease: "power3.out",
      });
  }, []);

  return (
    <div>
      <Head>
        <title>{`the.Weather App`}</title>
        <meta name="description" content="Weather app coded by Can Tutar." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <Transition ref={{ TransitionDiv, TransitionText }} />
        <Navbar />
        <div className="HomeScreenImage">
          <Image
            src={BackgroundImage}
            alt="Home Screen background image"
            layout="fill"
            priority={true}
          />
        </div>
        <main className="container-fluid text-center">
          <form
            className={`Center rounded ${classes.Card} Blur px-3 py-4`}
            onSubmit={onSubmitHandler}
          >
            <div className="row">
              <h1 className="display-3 lead">
                Welcome to the{" "}
                <span className="fst-italic LeadText">the.WeatherApp</span>...
              </h1>
              <div className="form-floating mt-2">
                <input
                  type="text"
                  name="Search"
                  id="Search"
                  value={search}
                  onChange={onChangeHandler}
                  className="form-control"
                />
                <label htmlFor="Search">Enter the city</label>
              </div>
              <>
                <Link href={`/${search}`}>
                  <a className="btn btn-dark mx-auto mt-4 col-8">
                    Search the city
                  </a>
                </Link>
              </>
            </div>
          </form>
        </main>
      </section>
    </div>
  );
}
