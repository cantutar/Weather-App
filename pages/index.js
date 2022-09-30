import Head from "next/head";
import MainPage from "../components/MainPage";

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>{`${data.name.toString()}-Weather App`}</title>
        <meta name="description" content="Weather app coded by Can Tutar." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <MainPage data={data} />
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  const dataFetch = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Istanbul&appid=${process.env.API_KEY}&units=metric`
  );
  const data = await dataFetch.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
    },
  };
}
