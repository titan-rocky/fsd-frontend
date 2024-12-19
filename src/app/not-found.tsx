export default function NotFound () {
    return (
    <main className="h-[85vh]">
        <section className="flex flex-col justify-center items-center p-10 h-full">
            <span className="text-red text-8xl font-bold">404</span>
            <span className="text-accent text-4xl font-bold text-center px-3 py-2 m-10" >Route not Found </span>
            <span className="text-accent text-4xl font-bold text-center px-3 py-1" >:{"("}</span>
        </section>
    </main>
    );
}
