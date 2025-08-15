import CardContainer from "@/components/card-container";
import DropdownCategory from "@/components/dropdown-section";

 async function getNews() {
  const res = await fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=XxRy9SySs4sAs1aTIe8yULS6HKvYbQGA', { cache: "force-cache"});
  const data: { results: News[] } = await res.json() 

  return data.results;
}

export default async function Home() {
  const news = await getNews();

  return (
    <>
      <h1>Home Page</h1>
      <div className="w-full h-full">
        <DropdownCategory/>
        <CardContainer news={news}/>
      </div>

    </>
  );
}
