export default async function getRandomQuote() {
  const res = await fetch("https://api.quotable.io/random", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("failed to fetch data");
  return res.json();
}
