import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import HeadlinesCarousel from '@/components/NewsTiles/HeadlinesCarousel';
import TopRightSection from '@/components/NewsTiles/TopRightSection';
import AllNewsList from '@/components/NewsTiles/AllNewsList';
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue,} from "@/components/ui/select"

const News = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selected, setSelected] = useState('');

  const linkItems = [
    {displayName: 'Home'},  //general category
    {displayName: 'For You'},
    {displayName: 'Following'},
    {displayName: 'U.S.'},
    {displayName: 'World'},
    {displayName: 'Local'},
    {displayName: 'Business'},
    {displayName: 'Technology'},
    {displayName: 'Entertainment'},
    {displayName: 'Sports'},
    {displayName: 'Science'},
    {displayName: 'Health'},
  ]

  useEffect(() => {
    const selectedCategory = searchParams.get('c');
    console.log(selectedCategory)
    if (selectedCategory) {
      setSelected(selectedCategory);
    } else {
      navigate(`?c=home`);
      setSelected('home');
    }
  }, [searchParams]);

  const handleItemsChange = (displayName) => {
    navigate(`?c=${displayName.toLowerCase()}`);
  };


  return (
    <div>
      <div className="flex items-center justify-end md:hidden h-10 mb-3 p-2 gap-5">
        <h1>Category:</h1>
        <Select onValueChange={handleItemsChange}>
          <SelectTrigger className="w-[250px]">
            <SelectValue placeholder="Select a Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {linkItems.map((item, index) => (
                <SelectItem key={index} value={item.displayName}>{item.displayName}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="hidden md:flex h-10 mb-3 p-2 gap-6">
        {linkItems.map((item, index) => (
          <>
            <p key={index} className={`font-semibold relative ${selected === item.displayName.toLowerCase() ? 'text-foreground after:content-[""] after:w-full after:h-[3px] after:absolute after:-bottom-1 after:left-0 after:bg-primary after:rounded-t-sm' : 'text-muted-foreground hover:text-foreground'} cursor-pointer`} onClick={() => handleItemsChange(item.displayName)}>{item.displayName}</p>
            {index === 2 && <Separator orientation="vertical" />}
          </>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3 py-3">
        <div className='col-span-3 md:col-span-2 h-96'>
          {selected && <HeadlinesCarousel selectedCategory={selected} />
          }
        </div>
        <div className="col-span-3 md:col-span-1 h-96 bg-background rounded-md overflow-hidden">
          <TopRightSection />
        </div>
        <div className="col-span-3 pt-5">
          {selected && <AllNewsList selectedCategory={selected} /> }
        </div>
        
      </div>
    </div>
  )
}

export default News