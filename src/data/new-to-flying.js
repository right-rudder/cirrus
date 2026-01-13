import { COMPANY_NAME, KEYWORDS } from "./consts";

export const data = {
  pageTitle: `New to Flying | ${COMPANY_NAME}`,
  pageDescription: `Learn about flight training, from beginning with a discovery flight, to getting your private pilot certificate, to exploring future programs, as well as, the career of a pilot. Schedule your discovery flight at ${COMPANY_NAME} and start flying today.`,
  pageKeywords: KEYWORDS,
  header: {
    image: {
      src: "/src/assets/stock/airplane-taking-off-cirrus-aviation-sarasota-flight-training.webp",
      alt: "Airplane taking off with trees in the background",
      objectPosition: "object-center lg:object-right"
    },
    title: "New To Flying?<br/>You're In The Right Place",
    subTitle: "Your first step into aviation starts here, with guidance, structure, and support from day one.",
    cta: [
      {
        url: "/take-a-discovery-flight#discovery-flight-form",
        text: "Book a Discovery Flight",
      },
      {
        url: "/contact-us",
        text: "Talk to an Instructor",
      },
    ],
  },

  journeyStart: {
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
      url: "/take-a-discovery-flight#discovery-flight-form",
      text: "Try Flying For The First Time",
    },
  },

  journeyRoadmap: {
    title: "The Training Path Explained",
    subTitle: "What your journey will be like",
    cards: [
      {
        title: "Discovery Flight",
        subTitle: "Your first time at the controls",
        description: "A Discovery Flight is your introduction to aviation and the best way to see what learning to fly is really like. You will sit in the pilot’s seat alongside a Certified Flight Instructor and take an active role in flying the aircraft. No prior experience is required, this flight is designed specifically for first-time students.\n\nDuring the flight, your instructor will explain the basics of aircraft control, what you are seeing and feeling, and how pilots safely operate in the air. It is a relaxed, hands-on experience that allows you to ask questions, explore the cockpit, and decide if flight training is right for you, with no obligation to continue.",
        img: {
          src: "/src/assets/sea-and-islands-seen-from-a-flying-airplane-cirrus-aviation-discovery-flight-sarasota.jpg",
          alt: "Sea and islands seen from above through an airplane window",
        },
        cta: {
          url: "/take-a-discovery-flight#discovery-flight-form",
          text: "Schedule Your Discovery Flight Now"
        }
      },
      {
        title: "Private Pilot Training",
        subTitle: "Build skills and confidence as a pilot",
        description: "Private Pilot Training is where you develop the skills and knowledge needed to fly an aircraft safely and confidently on your own. Training is conducted one-on-one with a Certified Flight Instructor and combines flight lessons with structured ground instruction to build a strong foundation.\n\nYou will learn how to perform takeoffs and landings, navigate cross-country flights, understand weather conditions, follow FAA regulations, and make sound aeronautical decisions. Progress is made step by step, allowing you to build confidence while developing safe habits that will stay with you throughout your flying career.",
        img: {
          src: "/src/assets/student-and-cfi-ppl-pass-cirrus-aviation-private-pilot-sarasota.jpg",
          alt: "Student and CFI smiling at the camera while holding a certificate in front of a plane",
        }
      },
      {
        title: "Optional Next Steps",
        subTitle: "Advance your training when you’re ready",
        description: "After earning your Private Pilot Certificate, many pilots choose to continue their training to expand their capabilities and flying opportunities. These next steps are entirely optional and depend on your personal interests, travel needs, or long-term goals.\n\nAdvanced training options include an Instrument Rating, which allows you to fly in a wider range of weather conditions, or Commercial Pilot training for those considering aviation as a career. Cirrus Aviation works with you to evaluate your goals and create a training path that fits your schedule and ambitions, without pressure to move faster than you’re ready for.",
        img: {
          src: "/src/assets/cessna-172s-instrument-panel-cirrus-aviation-flight-school-florida.jpg",
          alt: "Cessna 172s instrument panel",
        }
      },
    ],
  },

  journeyFuture: {
    title: "What Can You Do With Your Pilot's License",
    subTitle: "The journey's continuation",
    description: `
      If your end goal is to become a professional pilot, then the Private Pilot License is “Flying 101”, the place where everyone begins their aviation journey. If your aspirations are more personal than professional, the Private Pilot License will open up a whole new world to you. Imagine renting a plane and taking your spouse, family members, and friends on a flight down the coast for dinner, to Key West for a weekend getaway, or even just tooling around for a few hours in the brilliant blue sky and exploring the world below.

      Your Private Pilot License has practical benefits as well. Ever need to travel for business or pleasure? Avoid the crowded roads and soar high above the traffic, getting to your destination much faster and more safely than by car! Aircraft ownership is more cost effective than many people realize, especially if you share ownership with a few other pilots. Whatever your goals may be, you can accomplish them  here at Cirrus Aviation!
    `,
    imgs: [
      {
        src: "/src/assets/cessna-172-cirrus-aviation-sarasota-flight-training-scaled.webp",
        alt: "Plane taking off with sun in the background",
      },
      {
        src: "/src/assets/cfi-and-student-explanation-cirrus-aviation-north-port-ground-school-scaled.webp",
        alt: "CFI making explanation to student",
      },
      {
        src: "/src/assets/pilot-standing-side-plane-tail-cirrus-aviation-flight-school-bradenton-scaled.webp",
        alt: "Pilot standing to the side of a plane's tail",
      },
      {
        src: "/src/assets/stock/plane-flying-cirrus-aviation-commercial-pilot-florida.webp",
        alt: "Airplane flying with the sky in the background",
      },
      {
        src: "/src/assets/ppl-hunter-cirrus-aviation-sarasota-private-pilot-scaled.webp",
        alt: "Student and CFI commemorating in front an airplane with certification in hand",
      },
      {
        src: "/src/assets/cessna-172s-instrument-panel-cirrus-aviation-flight-school-florida-scaled.webp",
        alt: "Cessna 172s instrument panel",
      },
      {
        src: "/src/assets/stock/airport-runway-cirrus-aviation-career-pilot-punta-gorda.webp",
        alt: "Airport runway with clouds and sunset in the horizon",
      },
    ],
    cta: {
      url: "/take-a-discovery-flight#discovery-flight-form",
      text: "Start Now",
    }
  },

  whyUs: {
    title: `Why ${COMPANY_NAME}`,
    subTitle: "30+ years of excellence in the field",
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

  cta: {
    title: "Take the First Step",
    description:
      "Starting flight training may feel like a big decision, but it begins with a simple first step. A Discovery Flight allows you to experience flying firsthand, meet an instructor, and see if aviation is right for you, no commitment required.",
    cta: {
      url: "/take-a-discovery-flight#discovery-flight-form",
      text: "Book a Discovery Flight",
    },
    img: {
      src: "/src/assets/rainbow-seen-from-a-flying-plane-cirrus-aviation-tampa-bay-private-pilot.jpg",
      alt: "Rainbow seen from the window of a flying airplane",
      quality: 90,
    },
  },
};
