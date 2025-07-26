const Listing = require("../models/listing.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken= process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken});

module.exports.index= async (req,res)=>{
  const {category} = req.query;
  if(category){
    alllistings = await Listing.find({ category });
  }else{
    alllistings=await Listing.find({});
  }
  res.render("./listings/index.ejs",{alllistings});
}

module.exports.renderNewForm=(req,res)=>{
  let alltypes=["Trending","Rooms","IconicCities","Mountains","Castle","Pools","Treehouses","Tents","Boats","Farms","Camping","Arctic","Caravan","Igloo","Domes","Trucks"];
    res.render("./listings/new.ejs",{alltypes});
}

module.exports.showListing=async (req, res, next) => {
  let { id } = req.params;
  const listing = await Listing.findById(id).populate({path:"reviews",populate:"author"}).populate("owner");
  if(!listing){
    req.flash("error","Listing does not exist!");
    return res.redirect("/listings");
  }
  console.log(listing);
  res.render("./listings/show.ejs", { listing });
}

module.exports.addNewListing=async (req,res, next)=>{
  let response= await geocodingClient.forwardGeocode({
  query: req.body.listing.location,
  limit: 2
  }).send();

  let url=req.file.path;
  let filename=req.file.filename;
  const newlist= new Listing(req.body.listing);
  newlist.owner=req.user._id;
  newlist.image={url,filename};
  newlist.geometry= response.body.features[0].geometry;
  let savedlising=await newlist.save();
  console.log(savedlising);
  req.flash("success","New listing created!");
  res.redirect("/listings");
}

module.exports.renderEditForm=async (req, res) => {
  let { id } = req.params;
  const list = await Listing.findById(id);
  let alltypes=["Trending","Rooms","IconicCities","Mountains","Castle","Pools","Treehouses","Tents","Boats","Farms","Camping","Arctic","Caravan","Igloo","Domes","Trucks"];
  if(!list){
    req.flash("error","Listing does not exist!");
    return res.redirect("/listings");
  }
  let originalImageUrl=list.image.url;
  let reducedImage = list.image.url.replace("/upload", "/upload/c_fill,w_400,h_400,g_auto");
  console.log(reducedImage);
  res.render("listings/edit.ejs", { list,reducedImage,alltypes });
}

module.exports.editListing=async (req,res)=>{
  let {id}=req.params;
  const list=await Listing.findById(id);
  list.title = req.body.listing.title;
  list.description = req.body.listing.description;
  list.price = req.body.listing.price;
  list.location = req.body.listing.location;
  list.country = req.body.listing.country;
  let response= await geocodingClient.forwardGeocode({
  query: list.location,
  limit: 2
  }).send();
  list.geometry=response.body.features[0].geometry;

  if(typeof req.file !== "undefined"){
    let url=req.file.path;
    let filename=req.file.filename;
    list.image={url,filename};
    await list.save();
  }
  req.flash("success","Listing updated!");
  res.redirect(`/listings/${id}`);
}

module.exports.deleteListing=async (req,res)=>{
  let {id}=req.params;
  let deletedListing= await Listing.findByIdAndDelete(id);
  req.flash("success","Listing deleted!");
  res.redirect("/listings"); 
}