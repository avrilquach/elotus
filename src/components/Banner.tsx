import React, {useState } from 'react'
import {LazyLoadImage} from "react-lazy-load-image-component";
export type Props = {
  id?:number,
  title?:string,
  poster_path?: string,
}
export type BannerProps = {
  bannerList ?: Props[],
}
function Banner (BannerProps:any){
  const [dataSearch, setDataSearch] = useState<string>();
  const bannerList = BannerProps.bannerList;
  const handleSearch = (data:string) =>{
    setDataSearch(data);
    console.log("data",data);
  }
  return (
    <div className="banner">
      <div className="fade-in-image">
        <LazyLoadImage
          src={`https://image.tmdb.org/t/p/original${bannerList.poster_path}`}
        />
      </div>
      <div className="search">
        <h1>{bannerList.title}</h1>
        <input onKeyPress={(e:any)=>handleSearch(e.target.value)} className="input" placeholder="Search for a movie ..." />
      </div>
    </div>
  )
}
export default Banner;
