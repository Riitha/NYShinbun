import CardContainer from "@/components/card-container";
import CarouselNews from "@/components/carousel";

async function getNews() {
  const res = await fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=XxRy9SySs4sAs1aTIe8yULS6HKvYbQGA', { cache: "force-cache" });
  const data: { results: News[] } = await res.json()

  return data.results;
}

async function getUpdatedNews() {
  const res = await fetch ('https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=XxRy9SySs4sAs1aTIe8yULS6HKvYbQGA');
  const data : { results:News[] } = await res.json();

  return data.results
}

export default async function Home() {
  const news = await getNews();
  const updatedNews = await getUpdatedNews();

  return (
    <>
      <main className="w-full h-full bg-zumthor">
        <h1 className="mt-16 text-black text-center font-['Quintessential'] text-md sm:text-xl md:text-3xl lg:text-4xl font-bold p-2">Breaking News</h1>
        <CarouselNews updatedNews={updatedNews}/>
        <br />
        <h1 className="font-['Tinos'] font-bold text-firefly text-md md:text-4xl lg:text-5xl p-2 ml-10 border-b-2 border-skeptic w-32 lg:w-40">News Today!</h1>
        <CardContainer news={news} />
      </main>

    </>
  );
}
