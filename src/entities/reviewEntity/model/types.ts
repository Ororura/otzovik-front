type User = {
  username: string;
};

type Category = {
  name: string;
};

type Review = {
  title: string;
  content: string;
  rating: number;
  imagePath: string;
  user: User;
  category: Category;
};

export type { Review };
