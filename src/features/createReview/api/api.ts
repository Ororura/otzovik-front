import { axiosInstance } from "shared/api";
import { ReviewForm } from "../model";

const apiCreateReview = async (data: ReviewForm) => {
  try {
    data.rating = Number(data.rating);
    data.category_id = Number(data.category_id);
    data.user_id = Number(data.user_id);
    await axiosInstance.post("/reviews", data);
  } catch (e) {
    console.error(e);
  }
};

export { apiCreateReview };
