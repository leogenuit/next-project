// COMPONENT
import { Container } from "@/ui/components/container/container";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Seo } from "@/ui/components/seo/seo";

//DESING SYSTEM
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typography/typography";

//ICO
import { RiAccountCircleFill } from "react-icons/ri";

export default function DesignSystem() {
  return (
    <>
      <Seo title="Aberaise coder" description="Description ..." />
      <Navigation />
      <Typography variant="h2">Design system</Typography>
      <Container className="py-10 space-y-10">
        <div className="flex items-center gap-10">
          <Logo size="very-small" />
          <Logo size="small" />
          <Logo />
          <Logo size="large" />
        </div>
        <div className="flex items-center gap-10">
          <Spinner size="small" />
          <Spinner size="medium" />
          <Spinner size="large" />
        </div>

        <div className="flex items-center gap-10">
          <Avatar size="small" src="/assets/images/avatar-1.png" alt="avatar" />
          <Avatar
            size="medium"
            src="/assets/images/avatar-2.png"
            alt="avatar"
          />
          <Avatar size="large" src="/assets/images/avatar-3.png" alt="avatar" />
        </div>

        <div className="flex items-center gap-10">
          <Button isLoading size="small" variant="accent">
            button
          </Button>
          <Button
            isLoading
            size="small"
            icon={{ icon: RiAccountCircleFill }}
            iconPosition="left"
          >
            button
          </Button>
          <Button isLoading size="small" icon={{ icon: RiAccountCircleFill }}>
            button
          </Button>
          <Button isLoading size="small" variant="secondary">
            button
          </Button>
          <Button isLoading size="small" variant="outline">
            button
          </Button>
          <Button isLoading size="small" variant="disabled" disabled>
            button
          </Button>
          <Button
            isLoading
            size="small"
            variant="ico"
            icon={{ icon: RiAccountCircleFill }}
          />
        </div>
        <div className="flex items-center gap-10">
          <Button size="small">button</Button>
          <Button
            size="small"
            icon={{ icon: RiAccountCircleFill }}
            iconPosition="left"
          >
            button
          </Button>
          <Button size="small" icon={{ icon: RiAccountCircleFill }}>
            button
          </Button>
          <Button size="small" variant="secondary">
            button
          </Button>
          <Button size="small" variant="outline">
            button
          </Button>
          <Button size="small" variant="disabled" disabled>
            button
          </Button>
          <Button
            size="small"
            variant="ico"
            icon={{ icon: RiAccountCircleFill }}
          />
        </div>
        <div className="flex items-center gap-10">
          <Button>button</Button>
          <Button variant="secondary">button</Button>
          <Button variant="outline">button</Button>
          <Button variant="disabled" disabled>
            button
          </Button>
          <Button
            size="medium"
            variant="ico"
            icon={{ icon: RiAccountCircleFill }}
          />
        </div>
        <div className="flex items-center gap-10">
          <Button size="large">button</Button>
          <Button size="large" variant="secondary">
            button
          </Button>
          <Button size="large" variant="outline">
            button
          </Button>
          <Button size="large" variant="disabled" disabled>
            button
          </Button>
          <Button
            size="large"
            variant="ico"
            icon={{ icon: RiAccountCircleFill }}
          />
          <Button
            size="large"
            variant="ico"
            iconTheme="secondary"
            icon={{ icon: RiAccountCircleFill }}
          />
          <Button
            size="large"
            variant="ico"
            iconTheme="gray"
            icon={{ icon: RiAccountCircleFill }}
          />
        </div>
      </Container>
    </>
  );
}
