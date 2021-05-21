const tmdbUrl = 'https://api.themoviedb.org/3';
const tmdbApiKey = 'e81f6a0e15796f373528fd8ff8ea7da1';

export const movieDetails = async (id: any) => {
  const response = await fetch(
    `${tmdbUrl}/movie/${id.queryKey[1]}?api_key=${tmdbApiKey}&language=en-US`,
  );
  const data = await response.json();
  return data;
};

export const getCredits = async (id: any) => {
  const response = await fetch(
    `${tmdbUrl}/movie/${id.queryKey[1]}/credits?api_key=${tmdbApiKey}&language=en-US`,
  );
  const data = await response.json();
  return data.cast;
};

export const moviesList = async (tab: any) => {
  const response = await fetch(
    `${tmdbUrl}/movie/${tab.queryKey[1]}?api_key=${tmdbApiKey}`,
  );
  const data = await response.json();

  return data.results;
};

export const getTags = async () => {
  const response = await fetch(
    `${tmdbUrl}/genre/movie/list?api_key=${tmdbApiKey}&language=en-US`,
  );
  const data = await response.json();

  return data.genres;
};
