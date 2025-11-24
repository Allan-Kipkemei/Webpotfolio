import Link from "next/link";
import Logo from "./Logo";

export default function BlogHeader() {
    return (
        <header className="w-full flex justify-between items-center px-1 py-2 mb-2">
        <div>
            <Logo />
        </div>
        <nav>
            <ul className="flex items-center text-xs font-medium gap-2">
                <li className="hover:text-pink-400 transition duration-300">
                    <Link href="/">HOME</Link>
                </li>
                <li className="hover:text-pink-400 transition duration-300">
                    <Link href="/blogs">BLOGS</Link>
                </li>
                <li className="hover:text-pink-400 transition duration-300">
                    <Link href="/#contact">HIRE ME</Link>
                </li>
            </ul>
        </nav>
    </header>
    );
}
