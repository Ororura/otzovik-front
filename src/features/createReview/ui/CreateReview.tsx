"use client";
import { FC } from "react";
import { ReviewForm } from "features/createReview/model";
import { useForm } from "react-hook-form";
import { apiCreateReview } from "../api";

const CreateReview: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReviewForm>();

  const onSubmit = async (data: ReviewForm) => {
    await apiCreateReview(data);
  };
  return (
    <div className="max-w-2xl mx-auto p-6 border border-gray-300 bg-gray-50 rounded-lg mt-10">
      <h1 className="text-2xl font-semibold mb-6 text-center">Создать отзыв</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Заголовок
          </label>
          <input
            id="title"
            type="text"
            {...register("title", { required: "Заголовок обязателен" })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.title && (
            <span className="text-red-500 text-sm">{errors.title.message}</span>
          )}
        </div>

        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            Контент
          </label>
          <textarea
            id="content"
            {...register("content", { required: "Контент обязателен" })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.content && (
            <span className="text-red-500 text-sm">
              {errors.content.message}
            </span>
          )}
        </div>

        <div>
          <label
            htmlFor="rating"
            className="block text-sm font-medium text-gray-700"
          >
            Рейтинг (1-10)
          </label>
          <input
            type="number"
            id="rating"
            {...register("rating", {
              required: "Рейтинг обязателен",
              min: { value: 1, message: "Рейтинг должен быть не менее 1" },
              max: { value: 10, message: "Рейтинг должен быть не более 10" },
            })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.rating && (
            <span className="text-red-500 text-sm">
              {errors.rating.message}
            </span>
          )}
        </div>

        <div>
          <label
            htmlFor="image_path"
            className="block text-sm font-medium text-gray-700"
          >
            Путь к изображению
          </label>
          <input
            id="image_path"
            {...register("image_path")}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="user_id"
            className="block text-sm font-medium text-gray-700"
          >
            ID пользователя
          </label>
          <input
            type="number"
            id="user_id"
            {...register("user_id", { required: "ID пользователя обязателен" })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.user_id && (
            <span className="text-red-500 text-sm">
              {errors.user_id.message}
            </span>
          )}
        </div>

        <div>
          <label
            htmlFor="category_id"
            className="block text-sm font-medium text-gray-700"
          >
            ID категории
          </label>
          <input
            type="number"
            id="category_id"
            {...register("category_id", {
              required: "ID категории обязателен",
            })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.category_id && (
            <span className="text-red-500 text-sm">
              {errors.category_id.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-full mt-4 py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Отправить
        </button>
      </form>
    </div>
  );
};

export { CreateReview };
