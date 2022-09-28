import Head from "next/head";
import { useRouter } from "next/router";
import WeatherMain from "../../components/weatherMain";
import WeatherSummary from "../../components/WeatherSummary";

export default function Search({ data }) {
  let newDate;
  const event = new Date(data.dt * 1000);
  newDate = event.toLocaleString();

  return (
    <div>
      <Head>
        <title>{`${data.name.toString()}-Weather App`}</title>
        <meta name="description" content="Weather app coded by Can Tutar." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <div className="container-fluid pt-3">
          <div className="row">
            <WeatherMain data={data} time={newDate} />
            <WeatherSummary data={data} />
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
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
