
  export const fetchStarships = async () => {
    try {
      const response = await fetch('https://swapi.dev/api/starships/');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Fetch Error: ${error.message}`);
        } else {
            console.error("An unexpected error occurred");
        }
    }
}


export const fetchCategories = async () => {
  try {
    const response = await fetch('https://swapi.dev/api/');
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data
  } catch (error) {
      if (error instanceof Error) {
          console.error(`Fetch Error: ${error.message}`);
      } else {
          console.error("An unexpected error occurred");
      }
  }
}

