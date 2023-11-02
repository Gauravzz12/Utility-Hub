// src/utils/api.js

const fetchRandomQuote = async () => {
  const category = 'inspirational';
  const apiKey = 'rmViE2YbCD/W52gmCg4jMw==cyBb35nQMkHDxF1D';

  try {
    const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    if (result && result.length > 0) {
      const { quote, author } = result[0];
      return { text: quote, author };
    } else {
      console.error('No quotes found');
      return null;
    }
  } catch (error) {
    console.error('Error fetching quote:', error);
    return null;
  }
};
const API_URL = 'https://riddles-api.vercel.app';

const fetchRandomRiddle = () => {
  return fetch(`${API_URL}/random`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Error fetching riddle:', error);
      throw error;
    });
};
export { fetchRandomQuote,fetchRandomRiddle };
