import clsx from "clsx";
import { Button } from "@/ui/design-system/button/button";
import { footerSocialNetworksLinks } from "./app-links";
import { v4 as uuidv4 } from "uuid";
import { RiFacebookBoxFill } from "react-icons/ri";

interface Props {
  theme?: "gray" | "accent" | "secondary";
  className?: string;
}

export const SocialNetworksButtons = ({ className, theme = "gray" }: Props) => {
  const iconList = footerSocialNetworksLinks.map((socialNetwork) => {
    return (
      <Button
        key={uuidv4()}
        variant="ico"
        iconTheme={theme}
        icon={{
          icon: socialNetwork.icon ? socialNetwork.icon : RiFacebookBoxFill,
        }}
        baseUrl={socialNetwork.baseUrl}
        linkType={socialNetwork.type}
      />
    );
  });
  return <div className={clsx(className, "flex gap-2.5")}>{iconList}</div>;
};
