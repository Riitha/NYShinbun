import Image from "next/image"

export default function ListSearch({ result }: { result: NewsSearch[] }) {
    return (
        <>
            <ul className="list bg-base-100 rounded-box shadow-md">

                {result.map((item, index) => (
                    <li key={index} className="list-row">
                        <div className="text-4xl font-thin opacity-30 tabular-nums">{index+1}</div>
                        <div>
                            <Image 
                            className="size-10 rounded-box" 
                            src={item.multimedia.default.url}
                            width={100} height={100}
                            alt={item.headline.main}
                             />
                        </div>
                        <div className="list-col-grow">
                            <div>{item.headline.main}</div>
                            <div className="text-xs uppercase font-semibold opacity-60">{item.byline.original}</div>
                        </div>
                        <span className="badge badge-soft badge-primary">{item.document_type}</span>
                    </li>
                ))}


            </ul>
        </>
    )
}