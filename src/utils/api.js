const apiConfig = {
    baseUrl: 'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com',
    token: 'ipworld.info',
    headers: {
      'X-RapidAPI-Key': '15b9d7e5bcmsh1e999e69dd63d31p1d9b4bjsn0a18576a2867',
      'X-RapidAPI-Host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com',
    },
  };
  
  const fetchQuote = async () => {
    const url = `${apiConfig.baseUrl}/quote?token=${apiConfig.token}`;
    const options = {
      method: 'GET',
      headers: apiConfig.headers,
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
      throw error; 
    }
  };
  
  export { fetchQuote };
  