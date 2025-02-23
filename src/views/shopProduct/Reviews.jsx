import { useFormik } from "formik";
import { MessageSquare, Pen, Send } from "lucide-react";
import { useState } from "react";
import * as yup from "yup";
import {
  useAddReviewMutation,
  useGetReviewsQuery,
} from "../../store/api/reviewsApiSlice";
import toast from "react-hot-toast";
import MainButtonLoader from "../../components/MainButtonLoader";
import ReviewUnit from "./ReviewUnit";

export default function Reviews({ productId }) {
  const [addReviewState, setAddReviewState] = useState(false);
  const { data } = useGetReviewsQuery(productId);
  const [addReview, { isLoading }] = useAddReviewMutation();
  const reviews = data?.data;
  console.log(reviews);

  const formik = useFormik({
    initialValues: {
      reviewText: "",
      rating: 0,
    },
    validationSchema: yup.object({
      reviewText: yup.string().trim().required("Review is required"),
      rating: yup.number().required("Rating is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log({ ...values, productId });
      const { isSuccess } = await addReview({ ...values, productId });
      if (isSuccess) {
        toast.success("review added");
        resetForm();
      }
    },
  });
  const printReviews =
    reviews?.length > 0 ? (
      reviews.map((item) => (
        <ReviewUnit
          key={item._id}
          user={item.user}
          reviewText={item.reviewText}
          rating={item.rating}
        />
      ))
    ) : (
      <div className="flex justify-center items-center gap-5 flex-wrap">
        <h1 className="text-2xl">No reviews found</h1>
        <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <MessageSquare className="size-6 text-primary animate-bounce" />
        </div>
      </div>
    );

  return (
    <div className="bg-base-200 p-6 md:p-10">
      <header className="flex flex-col md:flex-row justify-between px-5 md:px-10 items-center my-5">
        <h1 className="text-xl md:text-2xl">Reviews</h1>
        <button
          onClick={() => setAddReviewState(!addReviewState)}
          className="btn btn-outline border-primary text-primary hover:bg-primary hover:text-white hover:border-none mt-3 md:mt-0"
        >
          <Pen className="size-4" /> Write a review
        </button>
      </header>

      <div className="flex flex-col lg:flex-row px-5 md:px-10 gap-5">
        {/* Rating Statistics */}
        {reviews?.length > 0 && (
          <div className="w-full lg:w-1/3">
            <div className="flex flex-col gap-2">
              <div className="flex gap-3 items-center">
                <h1 className="text-xl md:text-2xl font-bold">6.4</h1>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <input
                      key={i}
                      type="radio"
                      name="overall-rating"
                      className="mask mask-star-2 bg-yellow-400"
                      defaultChecked={i === 1}
                    />
                  ))}
                </div>
                <p className="font-semibold">232 reviews</p>
              </div>
              {[0, 10, 40, 70, 100].map((val, i) => (
                <div key={i} className="flex items-center gap-3">
                  <p>{i + 1}</p>
                  <progress
                    className="progress w-full"
                    value={val}
                    max="100"
                  ></progress>
                  <p>{val}%</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reviews Container */}
        <div className="w-full lg:w-2/3 space-y-6">
          {/* Single Review */}
          {printReviews}

          {/* Add Review Form */}
          {addReviewState && (
            <div className="mt-10">
              <form
                className="flex flex-col md:flex-row gap-2 w-full justify-center items-start"
                onSubmit={formik.handleSubmit}
              >
                <div className="form-control w-full md:w-10/12">
                  <input
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.reviewText}
                    name="reviewText"
                    placeholder="Write your review text..."
                    className={`input input-bordered w-full ${
                      formik.errors.reviewText && formik.touched.reviewText
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  {formik.touched.reviewText && formik.errors.reviewText && (
                    <p className="text-red-500 text-sm">
                      {formik.errors.reviewText}
                    </p>
                  )}
                  <div className="form-control mt-2">
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <input
                          key={i}
                          type="radio"
                          name="rating"
                          className="mask mask-star-2 bg-primary"
                          onChange={() => formik.setFieldValue("rating", i + 1)}
                          checked={formik.values.rating === i + 1}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary rounded-full self-end md:self-center"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <MainButtonLoader />
                  ) : (
                    <Send className="size-5 text-white" />
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
