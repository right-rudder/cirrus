export const SITE_TITLE = "Cirrus Aviation | Pilot Training Sarasota";

export const SITE_DESCRIPTION =
  "Cirrus Aviation has specialized in pilot training at the Sarasota-Bradenton International Airport since 1994. Based out of KSRQ, we train local pilots from Clearwater, St. Petersburg, Riverview, Tampa, Punta Gorda, and Venice areas, in addition to Sarasota and Bradenton. We also have an International Student Pilot training program for students abroad looking to train in the United States and we offer accommodation assistance. Our mission is to provide safe and solid pilot training for all students while maintaining a friendly, fun, and professional atmosphere. Whether you’re looking to fly recreationally for fun or looking to fly for a career, Cirrus Aviation has programs to fit your needs. Give us a call today and get started flying!";

// TODO : Check if they have all of these programs
// SEO tip -> keyword + city 1
export const KEYWORDS = [
  "Cirrus Aviation",
  "Sarasota Flight School",
  "Bradenton Flight School",
  "flight training Florida",
  "discovery flight Sarasota",
  "private pilot training Sarasota",
  "instrument rating Florida",
  "commercial pilot course Sarasota",
  "certified flight instructor training Florida",
  "multi-engine rating Sarasota",
  "best flight school in Sarasota",
  "aircraft rental Sarasota",
  "aircraft brokerage Florida",
  "learn to fly in Sarasota",
  "pilot training near St. Petersburg",
  "flight school Sarasota-Bradenton International Airport",
  "Cessna 172",
  "aviation programs Florida",
  "FAA certified flight school Sarasota",
  "affordable pilot training Sarasota",
].join(", ");

// Primary keywords by search intent
export const PRIMARY_KEYWORDS = {
  informational:
    "how to become a pilot in Sarasota, FAA flight training Florida, private pilot license cost Sarasota, instrument rating requirements Florida, commercial pilot career path, flight instructor programs Sarasota",
  navigational:
    "Cirrus Aviation Sarasota, Sarasota-Bradenton International Airport flight school, KSRQ flight training, Cirrus Aviation discovery flight",
  commercial:
    "best flight school Sarasota, affordable flight training Florida, pilot training near St. Petersburg FL, flight training comparison Sarasota",
  transactional:
    "book discovery flight Sarasota, enroll in pilot training Florida, schedule flight lesson KSRQ, join aviation program Sarasota",
};

// Secondary keywords by program type
export const PROGRAM_KEYWORDS: any = {
  "private-pilot":
    "private pilot training Sarasota, learn to fly Florida, PPL course KSRQ, beginner flight lessons Sarasota",
  "instrument-rating":
    "instrument rating Sarasota, IFR training Florida, instrument proficiency check KSRQ, fly in all weather Florida",
  "multi-engine-rating":
    "multi-engine rating Florida, twin-engine training Sarasota, MEL course, complex aircraft training Sarasota",
  "flight-simulation":
    "flight simulation Florida, flight simulator Sarasota, AATD flight simulator, Advanced Aviation Training Device",

  /* TODO : Fill */
  "career-pilot-program": "",
};

// Location-focused keywords
export const LOCATION_KEYWORDS = {
  primary:
    "Sarasota-Bradenton International Airport flight training, Sarasota flight lessons, Bradenton flight lessons",
  secondary: `Clearwater flight school, Riverview aviation training, Florida flight instruction, Tampa flight lessons, Punta Gorda pilot school, Venice FL flight training, St. Petersburg pilot training,
    Parrish flight training, Ellenton flight school, North Port aviation training, Ft. Myers pilot school`,
};

export const OG_IMAGE = "";

export const FAVICON = "/favicon.png";

export const LOGO = "/cirrus-aviation-logo.png";

//export const LOGO_ASSETS = "/cirrus-aviation-logo.png";

// CHANGE client business info
export const COMPANY_NAME = "Cirrus Aviation";
export const COMPANY_NAME_CAPS = "CIRRUS AVIATION";
export const COMPANY_NICKNAME = "Cirrus";
export const LOGO_PRIMARY = "/cirrus-aviation-logo.png";
export const LOGO_SECONDARY = "/cirrus-aviation-logo.png";
export const PHONE_NUMBER = "(941) 360-9074";
export const PHONE_NUMBER_HEADER = "(941) 360-9074";
export const EMAIL_ADDRESS = "dispatch@cirrusaviation.com"; // TODO : Update? marketing@cirrusaviation.com?

// Address
export const ADDRESS_LINE_1 = "8191 N. Tamiami Trail";
export const ADDRESS_LINE_2 = "Sarasota, FL 34243";
export const AIRPORT = "Sarasota-Bradenton International Airport";
export const AIRPORT_CODE = "KSRQ";
export const ADDRESS = "8191 N. Tamiami Trail, Sarasota, Florida 34243, United States";
export const ADDRESS_CITY = "Sarasota";
export const ADDRESS_STATE = "Florida";
export const ADDRESS_STATE_ABBR = "FL";
export const ADDRESS_ZIP = "34243";
export const GMAPS = "https://maps.app.goo.gl/tFoDLw257P1CvaKt6";

export const LOCATIONS = [
  {
    title: "Sarasota-Bradenton International Airport",
    address: "8191 N. Tamiami Trail",
    city: "Sarasota",
    state: "FL",
    zip: "34243",
    gMaps: "https://maps.app.goo.gl/tFoDLw257P1CvaKt6",
    phone: "(941) 360-9074",
    forwardPhone: "(941) 360-9074",
    fullAddress: "8191 N. Tamiami Trail, Sarasota, FL 34243, United States",
    fullAddressLineBreak: "8191 N. Tamiami Trail, Sarasota,\nFL 34243, United States",
  },
];

// Socials
export const FACEBOOK_URL = "https://www.facebook.com/cirrusaviation";
export const INSTAGRAM_URL = "https://www.instagram.com/cirrus_aviation";
export const INSTAGRAM_PROFILE = "@cirrus_aviation";
export const LINKEDIN_URL = "https://www.linkedin.com/company/cirrus-aviation-inc.";
export const X_URL = "https://twitter.com/CirrusAviation1";
export const YOUTUBE_URL = "https://www.youtube.com/user/CirrusAviation1";
export const YELP_URL = "https://www.yelp.com/biz/cirrus-aviation-sarasota";
export const GITHUB_URL = "";

export const COURSES = [
  "Private Pilot License (PPL)",
  "Instrument Rating (IR)",
  "Multi-Engine",
  "Career Pilot",
];

export const COURSES_OBJ = {
  privatePilot: "Private Pilot License (PPL)",
  instrumentRating: "Instrument Rating (IR)",
  multiEngine: "Multi-Engine",
  careerTrack: "Career Pilot",
}

export const OTHER_COURSES = ["Aircraft Rental", "Aircraft Brokerage"];

export const FLEET = [
  {
    title: "Cessna 172 Skyhawk SP - N393SP",
    path: "",
  },
  {
    title: "Cessna 172 Skyhawk SP - N171RA",
    path: "",
  },
  {
    title: "Cessna 172 Skyhawk SP - N56206",
    path: "",
  },
  {
    title: "Cessna 172 Skyhawk SP - N17409",
    path: "",
  },
];

export const VIDEOS = [
  {
    upperHeading: "",
    title: "",
    description: "",
    link: "",
    image: {
      src: "",
      alt: "",
      classes: "",
    },
  },
];
