import Image from "next/image"

export default function ListSearch({ result }: { result: NewsSearch[] }) {
    return (
        <>
            <ul className="list bg-malibu/80 rounded-box shadow-md gap-2 my-6">

                {result.map((item, index) => (
                    <li key={index} className="list-row">
                        <div className="text-4xl font-thin opacity-30 tabular-nums">{index + 1}</div>
                        <div>
                            {item.multimedia?.default.url ? (
                                <Image
                                    className="size-10 rounded-box"
                                    src={item.multimedia.default.url}
                                    width={100} height={100}
                                    alt={item.headline.main}
                                />
                            ) : null}

                        </div>
                        <div className="list-col-grow text-firefly font-['Tinos']">
                            <div>{item.headline.main}</div>
                            <div className="text-xs uppercase font-semibold opacity-60">{item.byline.original}</div>
                        </div>
                        <span className="badge badge-soft badge-primary bg-zumthor border-none font-[Tinos] font-bold">{item.document_type}</span>
                    </li>
                ))}


            </ul>
        </>
    )
}