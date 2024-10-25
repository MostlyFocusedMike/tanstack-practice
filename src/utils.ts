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

export const getAge = (birthDate: string) => {
  const today = new Date();
  const birthDateObj = new Date(birthDate);

  let age = today.getFullYear() - birthDateObj.getFullYear();
  const monthDiff = today.getMonth() - birthDateObj.getMonth();

  // Adjust age if the birthday hasn't happened yet this year
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
    age--;
  }

  return age;
}