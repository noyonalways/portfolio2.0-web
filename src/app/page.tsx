import ShinyButton from "@/components/ui/shiny-button";

export default function Home() {
  return (
    <>
      <section className="flex items-center justify-center h-screen">
        <div className="text-center space-y-2 flex-col flex">
          <h1 className="text-2xl md:text-3xl font-bold">
            Noyon Rahman | Portfolio 2.0
          </h1>
          <p>Under Construction</p>
          <a
            target="_blank"
            className="inline-block"
            href="https://old.noyonrahman.xyz"
          >
            <ShinyButton className="bg-gray-50">Learn More</ShinyButton>
          </a>
        </div>
      </section>
    </>
  );
}
