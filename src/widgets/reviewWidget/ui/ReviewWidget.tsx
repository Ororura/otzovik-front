import { FC } from "react";
import { ReviewEntity } from "entities/reviewEntity/ui";

const ReviewWidget: FC = () => {
  const reviews = [
    {
      title: "Great product!",
      content: "I really liked this product. It's very useful and well-made.",
      rating: 9,
      imagePath: "https://via.placeholder.com/400",
      user: {
        username: "john_doe",
      },
      category: {
        name: "Electronics",
      },
    },
    {
      title: "Not worth the price",
      content:
        "The product didn't meet my expectations. The quality is poor for the price.",
      rating: 3,
      imagePath: "https://via.placeholder.com/400",
      user: {
        username: "jane_smith",
      },
      category: {
        name: "Home Appliances",
      },
    },
    {
      title: "Amazing experience!",
      content:
        "This exceeded all my expectations! Highly recommend it to everyone.",
      rating: 10,
      imagePath: "https://via.placeholder.com/400",
      user: {
        username: "alex_lee",
      },
      category: {
        name: "Sports",
      },
    },
    {
      title: "Great product!",
      content: "I really liked this product. It's very useful and well-made.",
      rating: 9,
      imagePath: "https://via.placeholder.com/400",
      user: {
        username: "john_doe",
      },
      category: {
        name: "Electronics",
      },
    },
    {
      title: "Not worth the price",
      content:
        "The product didn't meet my expectations. The quality is poor for the price.",
      rating: 3,
      imagePath: "https://via.placeholder.com/400",
      user: {
        username: "jane_smith",
      },
      category: {
        name: "Home Appliances",
      },
    },
    {
      title: "Amazing experience!",
      content:
        "This exceeded all my expectations! Highly recommend it to everyone.",
      rating: 10,
      imagePath: "https://via.placeholder.com/400",
      user: {
        username: "alex_lee",
      },
      category: {
        name: "Sports",
      },
    },
    {
      title: "Great product!",
      content: "I really liked this product. It's very useful and well-made.",
      rating: 9,
      imagePath: "https://via.placeholder.com/400",
      user: {
        username: "john_doe",
      },
      category: {
        name: "Electronics",
      },
    },
    {
      title: "Not worth the price",
      content:
        "The product didn't meet my expectations. The quality is poor for the price.",
      rating: 3,
      imagePath: "https://via.placeholder.com/400",
      user: {
        username: "jane_smith",
      },
      category: {
        name: "Home Appliances",
      },
    },
    {
      title: "Amazing experience!",
      content:
        "This exceeded all my expectations! Highly recommend it to everyone.",
      rating: 10,
      imagePath: "https://via.placeholder.com/400",
      user: {
        username: "alex_lee",
      },
      category: {
        name: "Sports",
      },
    },
  ];

  return (
    <div className="gap-5 grid grid-cols-4 mt-5 max-w-screen-xl mx-auto">
      {reviews.map((review, index) => (
        <ReviewEntity key={index} review={review} />
      ))}
    </div>
  );
};

export { ReviewWidget };
