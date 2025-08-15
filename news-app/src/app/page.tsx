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
      <h1>Home Page</h1>
      <div className="w-full h-full">
        <CarouselNews updatedNews={updatedNews}/>
        <CardContainer news={news} />
      </div>

    </>
  );
}
