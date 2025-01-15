import { Typography } from "@/ui/design-system/typography/typography";
import { Container } from "../container/container";
import Image from "next/image";
import { footerLinks } from "../navigation/app-links";
import { v4 as uuidv4 } from "uuid";
import { ActiveLink } from "../navigation/active-link";
import { FooterLinks } from "@/types/app-links";
import { LinksType } from "@/lib/link-type";
import { SocialNetworksButtons } from "../navigation/social-networks-buttons";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerNavigationList = footerLinks.map((column) => {
    return <FooterLink key={uuidv4()} data={column} />;
  });

  return (
    <div className="bg-gray">
      <Container className="flex justify-between pt-16">
        <div className="flex flex-col items-center gap-1">
          <Typography variant="caption1" theme="white" weight="medium">
            Formation gratuite
          </Typography>
          <Typography variant="caption3" theme="gray">
            Abonne toi à la chaine
          </Typography>
          <a
            href="https://www.linkedin.com/in/l%C3%A9o-g-025088202/"
            target="_blank"
          >
            <Image
              src="/assets/images/linkedin.png"
              width={200}
              height={200}
              alt="my linkedin account"
            />
          </a>
        </div>
        <div className="flex gap-7">{footerNavigationList}</div>
      </Container>
      <Container className="p-10 space-y-10">
        <hr className="text-gray-800" />
        <div className="flex justify-between items-center">
          <Typography variant="caption4" theme="gray">
            {`Copyright © ${currentYear} Léo Genuit NextJs`}
          </Typography>
          <div>
            <SocialNetworksButtons />
          </div>
        </div>
      </Container>
    </div>
  );
};

interface footerLinkProps {
  data: FooterLinks;
}

const FooterLink = ({ data }: footerLinkProps) => {
  const linksList = data.links.map((link) => (
    <div key={uuidv4()}>
      {link.type === LinksType.INTERNAL && (
        <ActiveLink href={link.baseUrl}>{link.label}</ActiveLink>
      )}
      {link.type === LinksType.EXTERNAL && (
        <a href={link.baseUrl} target="_blank">
          {link.label}
        </a>
      )}
    </div>
  ));
  return (
    <div className="min-w-[190px]">
      <Typography
        theme="white"
        variant="caption2"
        weight="medium"
        className="pb-5"
      >
        {data.label}
      </Typography>
      <Typography
        theme="gray"
        variant="caption3"
        weight="medium"
        className="space-y-4"
      >
        {linksList}
      </Typography>
    </div>
  );
};
