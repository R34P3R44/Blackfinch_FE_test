export const fetchStarships = async () => {
    const response = await fetch('https://swapi.dev/api/starships/?page=1');
    const data = await response.json();
    return data
  };