export const mediaNamesFormatter = (movieList: string[]) => {
  const quotedMovies = movieList.map(movie => `"${movie}"`);
  const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });

  return formatter.format(quotedMovies);
}

export const formatDate = (timestamp: string) => {
  const date = new Date(timestamp);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};