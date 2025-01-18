import { axiosInstance } from "shared/api";
import { Review } from "entities/reviewEntity/model/types";

const reviewApi = {
  getReviews: async () => {
    try {
      const response = await axiosInstance.get<Review[]>("/reviews");
      if (response.status === 200) {
        return response.data;
      }
    } catch (e) {
      console.error(e);
    }
  },
};

export { reviewApi };
