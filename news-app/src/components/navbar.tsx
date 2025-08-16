import Link from "next/link"
import DropdownCategory from "./dropdown-section"

export default function Navbar() {
    return (
        <>
            <div className="navbar bg-malibu shadow-sm fixed top-0 right-0 left-0 z-40">
                <div className="flex-1">
                    <Link href='/' className="text-xl text-catskill  border-y-1 border-pigeon p-2 rounded-xl ml-4">NY 新聞</Link>
                </div>
                <div className="flex gap-2 items-center">
                    <Link href='/search'><button className="btn btn-ghost rounded-4xl bg-skeptic text-firefly border-none ">search</button></Link>
                    <DropdownCategory/>
                </div>
            </div>
        </>
    )
}