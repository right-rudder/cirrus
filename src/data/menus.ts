import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";

type Program = CollectionEntry<"flight-training">;

const sortedPrograms = (await getCollection("flight-training")).sort(
  (a: Program, b: Program) => (a.data.order || 999) - (b.data.order || 999),
);

const programMenu = sortedPrograms.map((program) => ({
  label: program.data.title,
  url: `/flight-training/${program.id}`,
}));

export type MenuItem = {
  label: string;
  url: string;
  children?: MenuItem[];
};

export type NavbarButton = {
  text: string;
  href: string;
  style: string;
};

export const menu: MenuItem[] = [
  {
    label: "Start Here",
    url: "/new-to-flying",
    children: [
      { label: "New to Flying", url: "/new-to-flying" },
      { label: "Discovery Flight", url: "/take-a-discovery-flight" },
      { label: "FAQs", url: "/faqs" },
    ],
  },
  {
    label: "Flight Training",
    url: "/flight-training",
    children: [
      {
        label: "All Programs",
        url: "/flight-training",
      },
      ...programMenu
    ],
  },
  {
    label: "Services",
    url: "/services",
    children: [
      { label: "Services", url: "/services" },
      { label: "Aircraft Rental", url: "/services/aircraft-rental" },
      { label: "Aircraft Brokerage", url: "/services/aircraft-brokerage" },
      { label: "Airman Testing", url: "/services/airman-testing" },
    ],
  },
  {
    label: "Resources",
    url: "/resources",
    children: [
      {
        label: "Resources",
        url: "/resources",
      },
      {
        label: "Education",
        url: "/resources/education",
      },
      {
        label: "Financing",
        url: "/resources/financing",
      },
      {
        label: "Insurance",
        url: "/resources/insurance",
      },
      {
        label: "Scholarships",
        url: "/resources/scholarships",
      },
      {
        label: "Customer Forms",
        url: "/resources/customer-forms",
      },
    ],
  },
  {
    label: "Flight Schedule",
    url: "https://app.flightschedulepro.com/Account/Login/139257",
    children: [
      {
        label: "Login",
        url: "https://app.flightschedulepro.com/Account/Login/139257",
      },
      {
        label: "Sign Up",
        url: "https://app.flightschedulepro.com/Account/Signup/139257",
      },
    ],
  },
  {
    label: "About Us",
    url: "/about-us",
    children: [
      { label: "About Us", url: "/about-us" },
      { label: "Our Fleet", url: "/about-us/fleet" },
      { label: "News and Highlights", url: "/news" },
      { label: "Contact Us", url: "/contact-us" },
    ],
  },
];

export const footerMenu: MenuItem[] = [
  {
    label: "Quick Links",
    url: "",
    children: [
      { label: "New to Flying", url: "/new-to-flying" },
      { label: "Discovery Flight", url: "/take-a-discovery-flight" },
      { label: "Aircraft Services", url: "/services" },
      { label: "Resources", url: "/resources" },
      { label: "FAQs", url: "/faqs" },
      {
        label: "Flight Schedule Login",
        url: "https://app.flightschedulepro.com/Account/Login/139257",
      },
      {
        label: "Flight Schedule Sign Up",
        url: "https://app.flightschedulepro.com/Account/Signup/139257",
      },
      { label: "Contact Us", url: "/contact-us" },
    ],
  },
  {
    label: "Flight Training",
    url: "/flight-training/",
    children: [
      {
        label: "All Programs",
        url: "/flight-training",
      },
      ...programMenu
    ],
  },
];