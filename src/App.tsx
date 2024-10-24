import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import HomePage from './pages/HomePage';
import CharacterPage from './pages/CharacterPage';
import UserProfilePage from './pages/UserProfilePage';

export default function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainContainer />}>
              <Route index element={<HomePage />} />
              <Route path="/characters/:characterId" element={<CharacterPage />} />
              <Route path="/profile" element={<UserProfilePage />} />
            </Route>
          </Routes>
    </BrowserRouter>
  );
}
