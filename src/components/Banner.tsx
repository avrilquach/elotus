import React, {useState } from 'react'
import {LazyLoadImage} from "react-lazy-load-image-component";
export type Props = {
  id?:number,
  title?:string,
  poster_path?: string,
}
export type BannerProps = {
  bannerList ?: Props[],
  onSubmit: Function,
}
function Banner (BannerProps:any){
  const bannerList = BannerProps.bannerList;
  const handleSearch = (data:string) =>{
    BannerProps.onSubmit(data);
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
        <input type="text" onChange={(e:any)=>handleSearch(e.target.value)} className="input" placeholder="Search for a movie ..." />
      </div>
    </div>
  )
}
export default Banner;
