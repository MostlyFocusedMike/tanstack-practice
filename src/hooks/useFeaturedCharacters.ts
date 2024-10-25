import { useQueries } from '@tanstack/react-query';
import queryFn from '../api/getCharacter';
import { CharacterType } from '../types';
const [belle, beast, mickey, donald] = [571, 544, 4703, 1947];
const featuredIds = [belle, beast, mickey, donald];

// You can use this in your component
export function useFeaturedCharacters() {
  const queries = useQueries({
    queries: featuredIds.map(id => ({
      queryKey: ['characters', id],
      queryFn: () => queryFn(id)
    })),
  });

  const isLoading = queries.some(query => query.isLoading);
  const isError = queries.some(query => query.isError);
  const errors = queries.map(query => query.error).filter(Boolean);
  const characters = queries.map(query => query.data).filter(Boolean) as CharacterType[];

  return {
    characters,
    isLoading,
    isError,
    errors
  };
}