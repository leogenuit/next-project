import { AppLinks } from "@/types/app-links";
import { RiLinkedinFill, RiSlackFill, RiYoutubeFill } from "react-icons/ri";

const footerApplicationLinks: AppLinks[] = [
  { label: "Accueil", baseUrl: "/", type: "internal" },
  { label: "Projets", baseUrl: "/#", type: "internal" },
  { label: "AbeRaise Coder", baseUrl: "/#", type: "internal" },
  {
    label: "Formations",
    baseUrl: "https://www.linkedin.com/in/l%C3%A9o-g-025088202/",
    type: "external",
  },
];

const footerUserLinks: AppLinks[] = [
  { label: "Mon espace", baseUrl: "/#", type: "internal" },
  { label: "Connexion", baseUrl: "/#", type: "internal" },
  { label: "Inscription", baseUrl: "/#", type: "internal" },
  {
    label: "Mot de passe oublié",
    baseUrl: "/https://www.linkedin.com/in/l%C3%A9o-g-025088202/",
    type: "external",
  },
];
const footerInformationLinks: AppLinks[] = [
  { label: "CGU", baseUrl: "/#", type: "internal" },
  { label: "Confidentialité", baseUrl: "/#", type: "internal" },
  { label: "À propos", baseUrl: "/#", type: "internal" },
  {
    label: "Contact",
    baseUrl: "/https://www.linkedin.com/in/l%C3%A9o-g-025088202/",
    type: "external",
  },
];
export const footerSocialNetworksLinks: AppLinks[] = [
  { label: "Youtube", baseUrl: "/#", type: "external", icon: RiYoutubeFill },
  { label: "Linkedin", baseUrl: "/#", type: "external", icon: RiLinkedinFill },
  { label: "Slack", baseUrl: "/#", type: "external", icon: RiSlackFill },
];

export const footerLinks = [
  {
    label: "App",
    links: footerApplicationLinks,
  },
  {
    label: "Utilisateurs",
    links: footerUserLinks,
  },
  {
    label: "Informations",
    links: footerInformationLinks,
  },
];
