import Link from "next/link"

export default function Home() {
  return (
    <main>
        <section className="flex flex-col justify-center items-center p-10">
            <span className="text-accent text-4xl">Welcome Home</span>
            <Link href="/register" className="bg-accent text-white rounded-lg px-3 py-2 m-10" >Register</Link>
        </section>
    </main>
  );
}
