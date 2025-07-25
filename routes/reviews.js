const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync= require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const Reviews = require("../models/reviews.js");
const {validateReview, isLoggedIn, isReviewAuthor}= require("../middleware.js");
const ReviewController= require("../controllers/reviews.js");

//Reviews post route
router.post("/", isLoggedIn, validateReview, wrapAsync(ReviewController.addNewReview));

//delete review
router.delete("/:reviewID", isLoggedIn, isReviewAuthor, wrapAsync(ReviewController.deleteReview));


module.exports= router;