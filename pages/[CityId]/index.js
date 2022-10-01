import Head from "next/head";
import MainPage from "../../components/MainPage";

export default function Search({ data, fourDayData }) {
  return (
    <>
      <Head>
        <title>{`${data.name.toString()}-Weather App`}</title>
        <meta name="description" content="Weather app coded by Can Tutar." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="H100">
        <div className="container-fluid">
          <MainPage data={data} fourDayData={fourDayData} />
        </div>
      </section>
    </>
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

  // Tried to implement this but my api level is free tier and doesnt allow me to use this

  // const fourDayDataFetch = await fetch(
  //   `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${cityname}&appid=${process.env.API_KEY}&units=metric`
  // );

  // const fourDayData = await fourDayDataFetch.json();
  // console.log(fourDayData);
  // if (fourDayData.cod === "404") {
  //   return {
  //     notFound: true,
  //   };
  // }
  if (data.cod !== 200) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
      // fourDayData,
    },
  };
}
