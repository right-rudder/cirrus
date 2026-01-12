import { COMPANY_NAME, KEYWORDS } from "./consts";

export const data = {
  pageTitle: `New to Flying | ${COMPANY_NAME}`,
  pageDescription: "",
  pageKeywords: KEYWORDS,
  header: {
    image: {
      src: "/src/assets/airplane-taking-off-cirrus-aviation-sarasota-flight-training.jpg",
      alt: "Airplane taking off with trees in the background",
    },
    title: "New To Flying? You're In The Right Place",
    subTitle: "Your first step into aviation starts here, with guidance, structure, and support from day one.",
    cta: [
      {
        url: "/discovery-flight",
        text: "Book a Discovery Flight",
      },
      {
        url: "/contact-us",
        text: "Talk to an Instructor",
      },
    ],
  },

  whatItMeans: {
    title: "What It Means to Start Flight Training",
    subTitle: "The Start of a Journey",
    description: `
      Learning to fly is a structured, step-by-step process designed to build skill, confidence, and safety from the very beginning. You do not need prior experience or technical knowledge to start. Flight training combines hands-on flying with guided ground instruction, all led by a Certified Flight Instructor who works closely with you at every stage.

      From your first lesson, you will learn how an aircraft works, how to communicate with air traffic control, and how to safely operate the airplane, progressing at a pace that matches your comfort level and schedule. You are never expected to “figure it out on your own.” Instruction, feedback, and support are built into every step.
    `,
    video: {
      type: "video",
      url: "/media/flight-over-plantations-cirrus-aviation-riverview-commercial-pilot.mp4",
      class: "aspect-16/9 object-cover object-center ml-auto lg:w-1/3",
    },
    cta: {
      url: "/discovery-flight",
      text: "Try Flying For The First Time",
    },
  },

  whyUs: {
    title: `Why ${COMPANY_NAME}`,
    subTitle: "30 years of excellence in the field",
    description: `
      ${COMPANY_NAME} is an FAA-approved flight school with decades of experience training pilots at all levels. Our programs are designed to be structured, professional, and supportive, especially for students who are new to aviation.
    `,
    bulletPoints: [
      "Our curriculum follows proven, standardized training methods aligned with FAA requirements.",
      "Our Certified Flight Instructors are trained to work with first-time students, providing clear instruction, consistent guidance and expertise from years of experience.",
      "We focus on safety, confidence, and steady progress, not pressure or shortcuts.",
    ],
    secondDescription:
      "Our goal is to help you become a knowledgeable, capable pilot while making the learning process approachable and rewarding.",
    instagram: {
      link: "https://www.instagram.com/reel/DNilxkwgNB3/?utm_source=ig_embed&utm_campaign=loading",
    }
  },

  roadmap: {
    title: "The Training Path Explained",
    subTitle: "Flight training follows a clear progression, allowing you to experience aviation before committing to long-term training.",
    cards: [
      {
        title: "Discovery Flight",
        description: "Your introduction to flying. You’ll fly the aircraft with an instructor, learn the basics, and see what training is really like.",
        img: {
          src: "/src/assets/sea-and-islands-seen-from-a-flying-airplane-cirrus-aviation-discovery-flight-sarasota.jpg",
          alt: "Sea and islands seen from above through an airplane window",
        }
      },
      {
        title: "Private Pilot Training",
        description: "This is where you learn to fly independently. Training includes aircraft control, navigation, weather, regulations, and safe decision-making.",
        img: {
          src: "/src/assets/student-and-cfi-ppl-pass-cirrus-aviation-private-pilot-sarasota.jpg",
          alt: "Student and CFI smiling at the camera while holding a certificate in front of a plane",
        }
      },
      {
        title: "Optional Next Steps",
        description: "After earning your Private Pilot Certificate, you may choose to continue with advanced training such as Instrument Rating or Commercial Pilot training. These steps are optional and depend entirely on your personal or career goals.",
        img: {
          src: "/src/assets/cessna-172s-instrument-panel-cirrus-aviation-flight-school-florida.jpg",
          alt: "Cessna 172s instrument panel",
        }
      },
    ],
  },

  cta: {
    title: "Take the First Step",
    description:
      "Starting flight training may feel like a big decision, but it begins with a simple first step. A Discovery Flight allows you to experience flying firsthand, meet an instructor, and see if aviation is right for you, no commitment required.",
    cta: {
      url: "/discovery-flight",
      text: "Book a Discovery Flight",
    },
    img: {
      src: "/src/assets/rainbow-seen-from-a-flying-plane-cirrus-aviation-tampa-bay-private-pilot.jpg",
      alt: "Rainbow seen from the window of a flying airplane",
      quality: 90,
    },
  },
};
