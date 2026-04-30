export interface Review {
  id: number;
  author: string;
  reviewCount: string;
  photoCount?: string;
  timeAgo: string;
  rating: number;
  text: string;
  badge?: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    author: "Anna Marie Evangelista",
    reviewCount: "34 reviews",
    photoCount: "78 photos",
    timeAgo: "a year ago",
    rating: 5,
    badge: "Local Guide",
    text: "OMG, after typing out a whole paragraph, it got deleted, so I'll leave it here. Simply put, go get yourself some fresh hot, delicious tacos and burritos at Paco's. Tried the carne asada, carnitas, shrimp, and adobado today. They have amazing food and you won't regret it!",
  },
  {
    id: 2,
    author: "Daniel Skelton",
    reviewCount: "13 reviews",
    photoCount: "3 photos",
    timeAgo: "3 months ago",
    rating: 5,
    badge: "Local Guide",
    text: "Best breakfast burritos in Ogden. I get the all meat one with the red sauce and the red sauce has a perfect spice to it, I have a pretty high hotness scale and its around a 7 or 7.5 not for the faint hearted.",
  },
  {
    id: 3,
    author: "Lusbin Cruz",
    reviewCount: "23 reviews",
    photoCount: "5 photos",
    timeAgo: "a month ago",
    rating: 2,
    badge: "Local Guide",
    text: "Worst place I've ever been we were looking at the menu some lady was working there helped someone else and not us, they were there before the other person.",
  },
];

export const reviewHighlights = [
  "I get my burritos with crispy fries instead of regular potatoes.",
  "Place was small but packed with customers because the food was so good!!",
  "Best breakfast burritos in Ogden.",
];

export const popularTags = [
  { label: "enchilada plate", count: 6 },
  { label: "drive thru", count: 13 },
  { label: "rolled tacos", count: 6 },
  { label: "meat lovers burrito", count: 3 },
];
