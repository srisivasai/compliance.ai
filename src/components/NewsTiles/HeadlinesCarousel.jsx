import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel"
import { cn } from "@/lib/utils";

const HeadlinesCarousel = ({ selectedCategory }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {

    const fetchNews = async () => {
        try {
          const params = {
            language: 'en',
            apiKey: import.meta.env.VITE_NEWSAPI_API_KEY,
          };
  
          if (selectedCategory.toLowerCase() === 'u.s.' || selectedCategory.toLowerCase() === 'local') {
            params.country = selectedCategory === 'u.s.' ? 'us' : 'in';
          } else {
            params.category = selectedCategory.toLowerCase() === 'home' ||  selectedCategory.toLowerCase() === 'world' ||  selectedCategory.toLowerCase() === 'for you' ||  selectedCategory.toLowerCase() === 'following' ? 'general' : selectedCategory.toLowerCase();
          }
  
          const response = await axios.get('https://newsapi.org/v2/top-headlines', { params });
          setArticles(response.data.articles);
        } catch (error) {
          console.error('Error fetching news:', error);
        }
      };

    fetchNews();
  }, [selectedCategory]);

  return (
    <Carousel className="w-full h-full">
      <CarouselContent className="w-full h-full">
        {articles.map((article, index) => (
          <CarouselItem key={index} className="w-full h-full">
            <div className="w-full h-full bg-background rounded-lg bg-center object-cover backdrop-brightness-100" style={{backgroundImage: `url(${article.urlToImage})`}}>
                <div className="p-5 pb-16 flex items-end h-full w-full backdrop-brightness-50 text-white">
                    <div>
                        <h4>{article.source.name}</h4>
                        <h2 className="text-2xl font-bold">{article.title}</h2>
                    </div>
                </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default HeadlinesCarousel;
