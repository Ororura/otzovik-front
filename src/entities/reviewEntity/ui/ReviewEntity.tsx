import { FC } from "react";
import { Review } from "entities/reviewEntity/model";

const ReviewEntity: FC<{ review: Review }> = ({ review }) => {
  return (
    <div className="border border-gray-300 p-6 mb-6 rounded-lg bg-gray-50">
      {review.imagePath && (
        <img
          src={review.imagePath}
          alt={review.title}
          className="w-full h-auto rounded-lg mb-4"
        />
      )}
      <h2 className="text-xl font-bold mb-2">{review.title}</h2>
      <p className="text-base mb-4">{review.content}</p>
      <div className="text-sm text-gray-600">
        <span className="block mb-2">Rating: {review.rating}</span>
        <span className="block mb-2">By: {review.user.username}</span>
        <span className="block">Category: {review.category.name}</span>
      </div>
    </div>
  );
};

export { ReviewEntity };
