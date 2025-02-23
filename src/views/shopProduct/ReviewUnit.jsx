export default function ReviewUnit({ user, rating, reviewText }) {
  return (
    <>
      <div className="flex flex-col p-4 bg-white rounded-lg shadow-md">
        <div className="flex gap-3 items-center">
          <img
            src={user?.avatar}
            alt={user?.fullName}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h1 className="font-bold">{user?.fullName}</h1>
            <div className="rating">
              {[...Array(rating)].map((_, i) => (
                <input
                  key={i}
                  type="radio"
                  name="review-1-rating"
                  className="mask mask-star-2 bg-yellow-400"
                  defaultChecked={i === 1}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="mt-3 text-gray-700">{reviewText}</p>
      </div>
    </>
  );
}
