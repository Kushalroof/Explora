const sampleListings = [
  {
    title: "Sun-Kissed Coastal Retreat",
    description:
      "Bask in ocean breezes at this stunning coastal home, just steps from the shoreline. Ideal for beach lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&...&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Urban Chic Loft",
    description:
      "Experience modern living in this stylish downtown loft with industrial charm and city vibes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&...&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Tranquil Forest Hideaway",
    description:
      "Reconnect with nature in this serene cabin surrounded by mountain views and pine trees.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&...&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Elegant Tuscan Villa",
    description:
      "Savor timeless beauty in this classic villa set in the rolling hills and vineyards of Tuscany.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&...&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Treetop Nature Escape",
    description:
      "Stay high above the ground in this secluded, handcrafted treehouse—an adventurer’s dream.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&...&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Oceanfront Serenity Condo",
    description:
      "Step into luxury with direct beach access and sunset views from your private balcony.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&...&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Lakeside Rustic Haven",
    description:
      "Perfect your cast or paddle along the shoreline from this warm, wooden cabin escape.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&...&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Cityscape Luxury Penthouse",
    description:
      "Live the high life in this expansive penthouse offering sweeping views and premium comfort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&...&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Alpine Ski Escape",
    description:
      "Gear up and glide straight onto the slopes from this cozy and convenient alpine chalet.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&...&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Wildlife Safari Retreat",
    description:
      "Observe majestic animals in their natural habitat from the comfort of a luxury lodge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&...&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Canal-Side Classic",
    description:
      "Immerse yourself in Dutch history with a stay in this traditional canal-side house.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&...&q=60",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Island Paradise Villa",
    description:
      "Your own private island awaits—luxury, seclusion, and nature all in one perfect package.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&...&q=60",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Fairytale Cotswold Cottage",
    description:
      "Stroll cobbled paths and stay in a dreamy thatched-roof cottage in the English countryside.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&...&q=60",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Classic Boston Brownstone",
    description:
      "Experience rich architecture and vibrant history in this charming and spacious brownstone.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&...&q=60",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
  },
  {
    title: "Bali Bliss Beach Hut",
    description:
      "Dip into your private pool and watch the waves crash from this Balinese beachfront dream.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&...&q=60",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Cabin in the Canadian Rockies",
    description:
      "Breathe in fresh mountain air and soak in the beauty of Banff from this cozy retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&...&q=60",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Art Deco Dream Pad",
    description:
      "Retro vibes meet modern amenities in this stunning Art Deco apartment near South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&...&q=60",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Phuket Poolside Escape",
    description:
      "Savor ocean breezes and tropical nights in this luxury villa with an infinity pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&...&q=60",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Scottish Highland Castle",
    description:
      "Experience grandeur and history in this majestic stone castle nestled in the highlands.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&...&q=60",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
  },
  {
    title: "Luxury Desert Retreat",
    description:
      "Escape to the dunes in this lavish Dubai estate featuring private pool and modern design.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&...&q=60",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Montana Log Cabin Escape",
    description:
      "Cozy up by the fire in this peaceful log cabin surrounded by pristine wilderness.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&...&q=60",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
  },
  {
    title: "Mediterranean Sea Villa",
    description:
      "Enjoy blue horizons and ancient beauty from this elegant villa right on the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&...&q=60",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Forest Canopy Eco Retreat",
    description:
      "Live sustainably in the trees in this eco-conscious, off-grid treehouse hideaway.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&...&q=60",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Southern Charm Cottage",
    description:
      "Wander cobblestone streets and enjoy hospitality in this adorable Charleston cottage.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&...&q=60",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
  },
  {
    title: "Tokyo Skyline Flat",
    description:
      "Walk to vibrant shops and eateries from this modern apartment with sweeping city views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&...&q=60",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "New Hampshire Lakehouse",
    description:
      "Nestled beside calm waters, this cabin is your gateway to peace and paddleboarding.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&...&q=60",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
  },
  {
    title: "Maldives Water Villa",
    description:
      "Float in style in this luxurious overwater bungalow with sweeping sea views and elegance.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&...&q=60",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Aspen Ski Lodge",
    description:
      "Ski and relax in this upscale mountain lodge with rustic charm and modern comforts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&...&q=60",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Pacific Coast Beach Bungalow",
    description:
      "Unwind in this peaceful seaside home with hammocks, waves, and tropical tranquility.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&...&q=60",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
  },
];

module.exports = { data: sampleListings };