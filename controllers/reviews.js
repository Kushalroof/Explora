const Reviews = require("../models/reviews.js");
const Listing = require("../models/listing.js");

module.exports.addNewReview=async(req,res)=>{
  let listing= await Listing.findById(req.params.id);
  let newReview= new Reviews(req.body.reviews);
  newReview.author= req.user._id;
  listing.reviews.push(newReview);

  await newReview.save();
  await listing.save();

  req.flash("success","New review posted!");
  res.redirect(`/listings/${req.params.id}`);
}

module.exports.deleteReview=async (req,res)=>{
  let {id,reviewID}= req.params;
  await Listing.findByIdAndUpdate(id,{$pull: {reviews: reviewID}});
  await Reviews.findByIdAndDelete(reviewID);

  req.flash("success","Review deleted!");
  res.redirect(`/listings/${id}`);
}