import CardContainer from "@/components/card-container";

const fetchNews = async () => {
  const res = await fetch('http://localhost:3001/news');
  const news: News[] = await res.json();

  return news;
};

export default async function Home() {
  const news = await fetchNews();

  return (
    <>
      <h1>Home Page</h1>
      <div className="w-full h-screen">
        <CardContainer news={news}/>
      </div>

    </>
  );
}
