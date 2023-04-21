import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../newsCard/NewsCard";

const Category = () => {
  const { id } = useParams();
  const categoryWiseNews = useLoaderData();
  return (
    <div>
      Category news: {categoryWiseNews.length}
      {categoryWiseNews.map((cNews) => (
        <NewsCard key={cNews.id} cNews={cNews} />
      ))}
    </div>
  );
};

export default Category;
