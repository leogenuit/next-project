import { AppLinks } from "@/types/app-links";

export const footerApplicationLinks: AppLinks[] = [
  { label: "Accueil", baseUrl: "/", type: "internal" },
  { label: "Projets", baseUrl: "/", type: "internal" },
  { label: "AbeRaise Coder", baseUrl: "/", type: "internal" },
  {
    label: "Formations",
    baseUrl: "/https://www.linkedin.com/in/l%C3%A9o-g-025088202/",
    type: "external",
  },
];

export const footerUserLinks: AppLinks[] = [
  { label: "Mon espace", baseUrl: "/", type: "interne" },
  { label: "Connexion", baseUrl: "/", type: "interne" },
  { label: "Inscription", baseUrl: "/", type: "interne" },
  {
    label: "Mot de passe oublié",
    baseUrl: "/https://www.linkedin.com/in/l%C3%A9o-g-025088202/",
    type: "external",
  },
];
export const footerInformationLinks: AppLinks[] = [
  { label: "CGU", baseUrl: "/", type: "interne" },
  { label: "Confidentialité", baseUrl: "/", type: "interne" },
  { label: "À propos", baseUrl: "/", type: "interne" },
  {
    label: "Contact",
    baseUrl: "/https://www.linkedin.com/in/l%C3%A9o-g-025088202/",
    type: "external",
  },
];
