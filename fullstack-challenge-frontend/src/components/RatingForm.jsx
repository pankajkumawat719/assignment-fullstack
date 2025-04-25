import { useState } from "react";
import axios from "axios";

const RatingForm = ({ storeId }) => {
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      await axios.post(
        "http://localhost:5000/api/rating",
        { storeId, rating, comment },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Rating submitted successfully!");
    } catch (err) {
      console.error("Error submitting rating", err);
      alert("There was an error submitting your rating.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="rating" className="block text-sm font-medium">
          Rating
        </label>
        <select
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded"
        >
          {[1, 2, 3, 4, 5].map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="comment" className="block text-sm font-medium">
          Comment
        </label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit Rating
      </button>
    </form>
  );
};

export default RatingForm;
