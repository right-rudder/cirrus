import { LiaPlaneSolid } from "react-icons/lia";
import { LiaFlag } from "react-icons/lia";
import { LiaGraduationCapSolid } from "react-icons/lia";
import { LiaCompass } from "react-icons/lia";

export const data = {
  header: {
    image: {
      src: "/src/assets/cessna-172s-instrument-panel-cirrus-aviation-flight-school-florida.jpg",
      alt: "Cessna 172s instrument panel",
    },
    videoSrc:
      "/media/airplane-taking-flight-cirrus-aviation-flight-school-florida.mp4",
    title: "Learn to Fly at Cirrus Aviation",
    subTitle:
      "Earn your Private Pilot License, or begin an exciting career as a commercial pilot. No matter your path, Cirrus Aviation can help you achieve your dream.",
    cta: [
      {
        url: "https://www.cirrusaviation.com/contact-us",
        text: "Learn More About Flight Training",
      },
    ],
  },

  cards: [
    {
      type: "simple",
      icon: LiaPlaneSolid,
      title: "Advanced Flight Sim Lab",
      description: "Pioneering new ways to use simulators in flight training.",
      cta: {
        url: "https://www.cirrusaviation.com/flight-simulator-lab",
        text: "Flight Sim Lab",
      },
    },
    {
      type: "simple",
      icon: LiaFlag,
      title: "Veterans: Use Your GI Bill",
      description:
        "Pay for your flight training with your U.S. military benefits.",
      cta: {
        url: "https://www.cirrusaviation.com/flight-training-for-military-veterans",
        text: "Use GI Bill",
      },
    },
    {
      type: "simple",
      icon: LiaGraduationCapSolid,
      title: "Earn Your College Degree",
      description: "Liberty University FTA: Earn your degree while you fly.",
      cta: {
        url: "https://www.cirrusaviation.com/get-your-bachelors-degree-in-aeronautics",
        text: "University Program",
      },
    },
    {
      type: "simple",
      icon: LiaCompass,
      title: "Destination Flight Training",
      description: "Intensive accelerated flight training in just a few weeks.",
      cta: {
        url: "https://www.cirrusaviation.com/flight-training",
        text: "Accelerated Training",
      },
    },
  ],

  path: {
    title: "Choose Your Path",
    subTitle: "Explore our flight training options",
    cards: [
      {
        type: "with-image",
        img: {
          src: "/src/assets/cockpit-instrument-panel-cirrus-aviation-flight-training-sarasota.jpg",
          alt: "View from the back of the instrument panel in the cockpit of an airplane",
        },
        title: "Career Pilot Program",
        description:
          "Demand for professional pilots is growing and there are ample opportunities for those with the right training. If you’re interested in a flying career, Cirrus Aviation offers aviation degree and non-degree curriculums.",
        cta: {
          url: "https://www.cirrusaviation.com/career-pilot-program",
          text: "Learn How To Start Your Career",
        },
      },
      {
        type: "with-image",
        img: {
          src: "/src/assets/student-beside-ariplane-with-first-solo-shirt-in-hands-cirrus-aviation-bradenton.jpg",
          alt: "Female student leaning on an airplane's wing while holding a first solo shirt",
        },
        title: "Recreational Flight Program",
        description:
          "For everyone who dreams of becoming a licensed pilot, there comes the moment to finally choose. Will you act on that desire and learn to fly, or will a pilot’s license forever remain just another unrealized dream?",
        cta: {
          url: "https://www.cirrusaviation.com/learn-to-fly",
          text: "Earn Your Private Pilot License",
        },
      },
      {
        type: "with-image",
        img: {
          src: "/src/assets/pilot-in-airplane-flying-cirrus-aviation-flight-school-florida.jpg",
          alt: "View from outside the left window of an airplane of two pilots during flight",
        },
        title: "Take a Discovery Flight",
        description:
          "Ever wondered what it’s like to fly an airplane? In our “Discovery Flight” package, a Certified Flight Instructor will give you a lesson in our AL172 Flight Simulator, and then cap it off with a flying lesson in the airplane.",
        cta: {
          url: "https://www.cirrusaviation.com/take-a-discovery-flight",
          text: "See What Flight Training Is Like",
        },
      },
    ],
  },

  aboutUs: {
    title: "About Cirrus Aviation",
    subTitle: "Get to know us",
    description: `We are a Sarasota-based flight school and aviation services provider built on decades of hands-on experience in pilot training and aircraft operations. As an FAA-approved training organization, we work with aircraft every day—training pilots, managing fleets, and upholding the highest standards of safety, professionalism, and regulatory compliance.

    That operational foundation shapes everything we do, from flight training to aircraft brokerage and aviation services. Our team brings practical insight, transparency, and a long-term ownership mindset to every client relationship, helping pilots and aircraft owners make confident, well-informed decisions at every stage of their aviation journey.`,
    cta: {
      url: "https://www.cirrusaviation.com/contact-us",
      text: "Contact Us",
    },
    videoURL: "https://www.youtube.com/embed/HBrcyC1FsdU?si=YNRDgoNCVJ1J0794",
  },

  explore: {
    title: "Explore Your Options",
    subTitle:
      "Learn more about our flight sim lab, aircraft fleet, and training programs",
    cards: [
      {
        type: "only-image",
        img: {
          src: "/src/assets/asian-pilot-smiling-to-camera-inside-cockpit-cirrus-aviation-tampa-discovery-flight.jpg",
          alt: "Asian pilot smiling at the camera inside an airplane's cockpit",
        },
        title: "International Students",
        description: "Find out about available accommodations, admissions processes, and general student information so you can start your flight training in Sarasota today.",
        cta: {
          url: "https://www.cirrusaviation.com/portfolio/portfolio-5-copy",
        },
      },
      {
        type: "only-image",
        img: {
          src: "/src/assets/soldier-talking-on-handheld-radio-obscured-by-shadow-cirrus-aviation-private-pilot-clearwater.jpg",
          alt: "Soldier talking on a handheld radio while obscured by shadow",
        },
        title: "Use Your GI Bill",
        description: "Learn about military benefits through our partnership with Liberty University.",
        cta: {
          url: "https://www.cirrusaviation.com/portfolio/portfolio-8",
        },
      },
      {
        type: "only-image",
        img: {
          src: "/src/assets/liberty-sports-logo-cirrus-aviation-riverview-flight-school.jpg",
          alt: "Liberty Sports Logo",
        },
        title: `Get Your Bachelor's Degree<br/>In Aeronautics`,
        description: "Study at Liberty University and see the available flight training programs so you can start flying today.",
        cta: {
          url: "https://www.cirrusaviation.com/portfolio/aeronautics-degree/",
        },
      },
      {
        type: "only-image",
        img: {
          src: "/src/assets/left-view-of-airplane-cockpit-from-open-door-cirrus-aviation-punta-gorda-pilot-training.jpg",
          alt: "Airplane's cockpit seen from its open left door",
        },
        title: "Flight Sim Lab",
        description: "Prepare to fly an aircraft through our advanced flight simulators while still adding time toward your flight certifications.",
        cta: {
          url: "https://www.cirrusaviation.com/portfolio/portfolio-5/",
        },
      },
      {
        type: "only-image",
        img: {
          src: "/src/assets/three-airplanes-in-front-of-hangar-cirrus-aviation-instrument-rating.jpg",
          alt: "Three airplanes in front of hangars",
        },
        title: "Our Aircraft Fleet",
        description: "See our well-maintained Cessna 172 fleet with advanced avionics available for flight training and rental.",
        cta: {
          url: "https://www.cirrusaviation.com/portfolio/portfolio-item-4/",
        },
      },
      {
        type: "only-image",
        img: {
          src: "/src/assets/inside-airplane-two-pilots-landing-on-runway-cirrus-aviation-st-petersburg-certified-flight-instructor.jpg",
          alt: "View from inside and airplane of two pilots almost landing with the runway close in sight",
        },
        title: `Aircraft Checkout<br/>And Rental Rates`,
        description: "Read more about the requirements to rent an aircraft with Cirrus Aviation.",
        cta: {
          url: "https://www.cirrusaviation.com/portfolio/portfolio-item-3/",
        },
      },
    ],
  },
  
  cta: {
    title: "Ready to Take the Left Seat?",
    description:
      "Whether you’re chasing a lifelong dream or starting a professional aviation career, our experienced instructors and modern training aircraft are here to help you take off with confidence. Your journey to the cockpit starts today.",
    cta: {
      url: "/contact-us",
      text: "Start Today",
    },
    img: {
      src: "/src/assets/stock/airplane-taking-off-sunset-cirrus-aviation-private-pilot-sarasota.jpg",
      alt: "Airplane taking of with the sunset in the background",
      objectPosition: "object-bottom",
      quality: 90,
    },
  },
};
