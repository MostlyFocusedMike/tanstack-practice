import { useState, FormEvent, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"
import useSearchQueryDebounce from "../hooks/useSearchQueryDebounce";

export default function SearchForm() {
  const [searchParams] = useSearchParams();
  const nameQueryParam = searchParams.get('name') || '';
  const [inputVal, setInputVal] = useState(nameQueryParam);
  const navigate = useNavigate();

  const handleSearch = () => navigate(`/search?name=${encodeURIComponent(inputVal)}`);

  useSearchQueryDebounce(handleSearch, inputVal);
  useEffect(() => {
    setInputVal(nameQueryParam);
  }, [nameQueryParam]);

  // Even though we have debounce, we don't want to remove A11ys ability to submit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        placeholder="Find a character..."
      />
    </form>
  );
}