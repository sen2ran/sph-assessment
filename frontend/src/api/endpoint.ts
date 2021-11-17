const config = {
  baseUrl: "http://localhost:3001/api",
  api: {
    getSearchValue: "/search",
    getDetails: "/search/details/{id}",
  },
  inputDebounceInterval: 500,
};

export default config;
