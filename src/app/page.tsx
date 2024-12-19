import Link from "next/link"

export default function Home() {
  return (
    <main className="h-[85vh]">
        <section className="flex flex-col justify-center items-center p-10 h-full">
            <span className="text-accent text-center text-6xl">Welcome Home</span>
            <Link href="/register" className="bg-accent text-white rounded-lg px-3 py-2 m-10" >Register</Link>
        </section>
    </main>
  );
}
