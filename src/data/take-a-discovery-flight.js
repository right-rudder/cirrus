import { COMPANY_NAME, KEYWORDS } from "./consts";

export const data = {
  pageTitle: `Discovery Flight | ${COMPANY_NAME}`,
  pageDescription: `A Discovery Flight is the first step into your flight training journey, learn from a Certified Flight Instructor about piloting an aircraft and experience flying a plane with your own hands. Book your Discovery Flight at ${COMPANY_NAME} now and begin your journey to the skies.`,
  pageKeywords: KEYWORDS,

  header: {
    image: {
      src: "/src/assets/cessna-172-cirrus-aviation-sarasota-flight-training.jpg",
      alt: "Plane taking off with sun in the background",
      objectPosition: "object-center lg:object-right"
    },
    title: "Discovery Flight",
    subTitle: "Discover if flight training is right for you with an introductory flight designed for first-time pilots.",
    cta: [
      {
        url: "#discovery-flight-form",
        text: "Book Your Flight",
      },
    ],
  },

  
};
