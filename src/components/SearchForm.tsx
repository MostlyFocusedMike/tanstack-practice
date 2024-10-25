import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom"

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?name=${encodeURIComponent(searchTerm)}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Find a character..."
      />
    </form>
  );
}