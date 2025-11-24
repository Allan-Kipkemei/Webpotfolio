import Link from "next/link";
import Image from "next/image";

export default function Logo() {
    return (
        <Link className="flex items-center" href="/">
            <Image className="w-48 mr-2" src="/horizontal-logo.png" alt="Alvin Chang" width={1100} height={300} />
        </Link>
    )
}