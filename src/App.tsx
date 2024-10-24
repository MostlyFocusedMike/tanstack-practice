import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import HomePage from './pages/HomePage';
import CharacterPage from './pages/CharacterPage';
import UserProfilePage from './pages/UserProfilePage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import SearchPage from './pages/SearchPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 5 * 60 * 1000 },
  }
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainContainer />}>
            <Route index element={<HomePage />} />
            <Route path="/characters/:characterId" element={<CharacterPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/profile" element={<UserProfilePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
