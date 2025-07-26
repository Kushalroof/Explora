const express = require("express");
const mongoose = require("mongoose");
const Reviews = require("./reviews.js");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  image: {
    url: String,
    filename: String
  },
  price: Number,
  location: String,
  country: String,
  reviews:[{
    type:Schema.Types.ObjectId,
    ref:"Review"
  }],
  owner:{
    type:Schema.Types.ObjectId,
    ref:"User"
  },
  geometry:{
    type:{
      type:String,
      enum:["Point"],
      required:true
    },
    coordinates:{
      type:[Number],
      required:true
    }
  },
  category:{
    type:String,
    enum:["Trending","Rooms","IconicCities","Mountains","Castle","Pools","Treehouses","Tents","Boats","Farms","Camping","Arctic","Caravan","Igloo","Domes","Trucks"]
  }
});

listingSchema.post("findOneAndDelete", async(listing)=>{
  if(listing){
    await Reviews.deleteMany({_id: {$in: listing.reviews}});
  }
});

const Listing=mongoose.model("Listing",listingSchema);
module.exports= Listing;