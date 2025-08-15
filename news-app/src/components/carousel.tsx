
export default function CarouselNews( {updatedNews} : {updatedNews: News[]} ) {
    return (
        <>
            <div className=" flex justify-center items-center">
                <div className="carousel carousel-center bg-neutral rounded-box max-w-xl space-x-4 p-4">
                    <div className="carousel-item">
                        {updatedNews.slice(0,7).map((item) => {
                            return (
                                <div key={item.uri}>
                                    <img src={item.multimedia[2].url} alt={item.title}
                                    className="w-auto h-auto object-contain" />
                                <p className="bg-gray-200 w-110 h-15 text-black p-1 break-normal line-clamp-2">{item.title}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}