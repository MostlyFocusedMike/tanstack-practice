export const mediaNameFormatter = (movieList: string[]) => {
  const quotedMovies = movieList.map(movie => `"${movie}"`);
  const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });

  return formatter.format(quotedMovies);
}