import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return ( <> 
 <div className="flex items-center justify-center h-screen px-4 text-center">
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold max-w-3xl">
        <Link 
          href="/manager" 
          className="hover:text-blue-500 transition-colors duration-300"
        >
          This is a centered text link that goes to the Manager page.
        </Link>
      </h1>
    </div>
    </>
  );
}
