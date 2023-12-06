import * as dao from "./dao.js";
function ReviewRoutes(app) {
 const createReview = async (req, res) => {
  const rev = await dao.createReview(req.body);
  res.json(rev);
 };

 const findAllReviews = async (req, res) => {
  const revs = await dao.findAllReviews();
  res.json(revs);
 };

 app.post("/api/reviews", createReview);
 app.get("/api/reviews", findAllReviews);
}
export default ReviewRoutes;
