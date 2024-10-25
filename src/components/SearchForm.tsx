import { useState, FormEvent, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"

export default function SearchForm() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name') || ''
  const [searchTerm, setSearchTerm] = useState(name);
  const navigate = useNavigate();

  useEffect(() => {
    setSearchTerm(name);
  }, [name]);

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