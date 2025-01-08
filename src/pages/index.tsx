import { Seo } from "@/ui/components/seo";
import { Button } from "@/ui/design/button/button";
import { Spinner } from "@/ui/design/spinner/spinner";
import { RiAccountCircleFill } from "react-icons/ri";
// import { Typography } from "@/ui/design/typography/typography";
export default function Home() {
  return (
    <>
      <Spinner size="large" />
      <Seo title="Aberaise coder" description="Description ..." />

      <div className="flex items-center gap-4 p-10">
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

      <div className="flex items-center gap-4 p-10">
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
      <div className="flex items-center gap-4 p-10">
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
      <div className="flex items-center gap-4 p-10">
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
    </>
  );
}
