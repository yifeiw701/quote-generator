import Link from "next/link";
import getRandomQuote from "@/lib/getRandomQuote";
import RefreshButton from "@/components/RefreshButton";

export default async function Home() {
  const quoteData: Promise<Quote> = getRandomQuote();
  const quote = await quoteData;

  return (
    <main className="grid h-screen place-items-center bg-cover bg-center">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="mx-12 flex-1 rounded-xl bg-neutral-700 bg-opacity-70 px-6 py-6 shadow-xl md:mx-48 relative">
          <p className="text-2xl font-bold text-neutral-100 md:text-4xl">
            {quote.content}
          </p>
          <p className="text-md mt-4 text-neutral-100 md:text-2xl">
            - {quote.author}
          </p>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-1/2 relative">
            <div className="h-full absolute top-0 right-3">
              <RefreshButton />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
