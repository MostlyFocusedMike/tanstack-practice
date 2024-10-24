export default async function fetchHandler(url: string, opts?: RequestInit) {
  const response = await fetch(url, opts);
  const { ok, status, statusText } = response;
  if (!ok) throw new Error(`Fetch failed with status - ${status}, ${statusText}`);

  return await response.json();
}