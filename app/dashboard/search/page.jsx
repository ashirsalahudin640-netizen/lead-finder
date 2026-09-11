import SearchPageClient from "./SearchPageClient";

export default async function SearchPage({ searchParams }) {
  const params = await searchParams;
  const query = params?.query || "";

  return <SearchPageClient query={query} />;
}