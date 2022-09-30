import Head from "next/head";
import MainPage from "../../components/MainPage";
import WeatherMain from "../../components/weatherMain";
import WeatherSummary from "../../components/WeatherSummary";

export default function Search({ data }) {
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
  const { params, req, res } = context;
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const cityname = params.CityId;
  const dataFetch = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${process.env.API_KEY}&units=metric`
  );
  const data = await dataFetch.json();

  if (data.cod === "404") {
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
