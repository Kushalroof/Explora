const express= require("express");
const router = express.Router();
const wrapAsync= require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const passport = require("passport");
const {isLoggedIn, isOwner, validateListing}= require("../middleware.js");
const ListingController= require("../controllers/listings.js");
const multer  = require('multer')
const {storage}= require("../cloudConfig.js");
const upload = multer({storage});

router.route("/")
.get(wrapAsync(ListingController.index))
.post(isLoggedIn, upload.single("image"), validateListing, wrapAsync(ListingController.addNewListing));

router.get("/new", isLoggedIn,ListingController.renderNewForm);

router.route("/:id")
.get( wrapAsync(ListingController.showListing))
.put(isLoggedIn, isOwner, upload.single("image"), validateListing, wrapAsync(ListingController.editListing))
.delete(isLoggedIn, isOwner, wrapAsync(ListingController.deleteListing));

router.get("/:id/edit", isLoggedIn, isOwner,wrapAsync(ListingController.renderEditForm));

module.exports=router;