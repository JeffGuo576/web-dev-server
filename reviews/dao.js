import model from "./model.js";
export const createReview = (rev) => model.create(rev);
export const findAllReviews = () => model.find();
