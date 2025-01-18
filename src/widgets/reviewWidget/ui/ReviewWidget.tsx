import { FC } from "react";
import { ReviewEntity } from "entities/reviewEntity/ui";
import { reviewApi } from "entities/reviewEntity/api";

const ReviewWidget: FC = async () => {
  const data = await reviewApi.getReviews();

  return (
    <div className="gap-5 grid grid-cols-4 mt-5 max-w-screen-xl mx-auto">
      {data &&
        data.map((review, index) => (
          <ReviewEntity key={index} review={review} />
        ))}
    </div>
  );
};

export { ReviewWidget };
