import React from "react";
import moment from "moment";
import {
  FaBookmark,
  FaShareAlt,
  FaEye,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Rating from "react-rating";

const NewsCard = ({ cNews }) => {
  const {
    _id,
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    image_url,
    details,
  } = cNews;
  return (
    <div className="bg-white rounded-lg shadow-lg my-5">
      <div className="flex justify-between items-center p-2  bg-gray-100">
        <div className="flex items-center space-x-2">
          <div className="">
            <img src={author.img} alt="" className="w-10 rounded-full" />
          </div>
          <div className="">
            <div className="">
              <p>{author.name}</p>
            </div>
            <div className="">
              <p>
                {moment(author.published_date).format(
                  "MMMM Do YYYY, h:mm:ss a"
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <FaBookmark />
          <FaShareAlt />
        </div>
      </div>
      <div className="p-4">
        {" "}
        <h2 className="text-xl font-bold">{title}</h2>
        <img src={image_url} alt="" />
        <p className="text-gray-700">
          {details.length < 200 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 200)}...{" "}
              <Link className="text-indigo-600 font-bold" to={`/news/${_id}`}>
                Read More
              </Link>{" "}
            </>
          )}
        </p>
      </div>
      <div className="p-2 bg-gray-100 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="">
            <Rating
              placeholderRating={rating.number}
              emptySymbol={<FaStarHalfAlt className="text-amber-500" />}
              placeholderSymbol={<FaStar className="text-amber-500" />}
              fullSymbol={<FaStar />}
              readonly
              activeColor="#ffd700"
            ></Rating>
          </div>
          <div className="">{rating.number}</div>
        </div>
        <div className="flex items-center space-x-2">
          <FaEye />
          <p>{total_view}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
