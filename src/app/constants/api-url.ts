export const AppApiUrls= {
  fakeApi: {
    login: 'http://localhost:8000/auth/login',
    registration: 'http://localhost:8000/auth/register'
  },
  NY: {
    getStoriesByCategory: (storyCategory: string, key: string) => `https://api.nytimes.com/svc/topstories/v2/${storyCategory}.json?api-key=${key}`,
    searchStoriesByText: (searchTxt: string, key: string) => `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTxt}&api-key=${key}`,
    getStoryReviewByUrl: (url:string, key: string) => `https://api.nytimes.com/svc/community/v3/user-content/url.json?api-key=${key}&offset=0&url=${url}`
  },
}