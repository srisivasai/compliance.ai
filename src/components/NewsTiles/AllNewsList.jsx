import React, { useEffect, useState, useRef, useCallback } from 'react';
import axios from 'axios';
import moment from 'moment';

const AllNewsList = ({ selectedCategory }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  const fetchNews = useCallback(async () => {
    setLoading(true);
    try {
      const params = {
        language: 'en',
        apiKey: import.meta.env.VITE_NEWSAPI_API_KEY,
        page: page
      };

      if (selectedCategory.toLowerCase() === 'u.s.' || selectedCategory.toLowerCase() === 'local') {
        params.country = selectedCategory.toLowerCase() === 'u.s.' ? 'us' : 'in';
      } else {
        params.category = selectedCategory.toLowerCase() === 'home' ||  selectedCategory.toLowerCase() === 'world' ||  selectedCategory.toLowerCase() === 'for you' ||  selectedCategory.toLowerCase() === 'following' ? 'general' : selectedCategory.toLowerCase();
      }

      const response = await axios.get('https://newsapi.org/v2/top-headlines', { params });
      setArticles(prevArticles => [...prevArticles, ...response.data.articles]);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching news:', error);
      setLoading(false);
    }
  }, [page, selectedCategory]);

  useEffect(() => {
    setArticles([]);
    setPage(1);
  }, [selectedCategory]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews, page]);

  const lastArticleElementRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPage(prevPage => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading]);

  return (
    <div className="space-y-3">
      {articles.map((article, index) => (
        <div key={index} className='bg-background rounded-md transition-all hover:shadow-md p-3 flex gap-4'>
          <div className="h-32 w-52">
            <img src={article.urlToImage} alt={article.title} className='rounded-sm w-full h-full object-cover' />
          </div>
          <div className="w-full flex flex-col justify-between py-3">
            <div>
              <p className="text-muted-foreground text-sm font-semibold">{article.source.name}</p>
              <h1 className="font-semibold text-lg">{article.title}</h1>
            </div>
            <div>
              <p className="text-muted-foreground text-sm font-semibold">{moment(article.publishedAt).fromNow()}</p>
            </div>
          </div>
        </div>
      ))}
      <div ref={lastArticleElementRef} />
      {loading && <p>Loading more articles...</p>}
    </div>
  );
};

export default AllNewsList;