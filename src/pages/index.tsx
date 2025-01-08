import { Seo } from "@/ui/components/seo";
import { Button } from "@/ui/design/typography/button/button";
import { RiAccountCircleFill } from "react-icons/ri";
// import { Typography } from "@/ui/design/typography/typography";
export default function Home() {
  return (
    <>
      <Seo title="Aberaise coder" description="Description ..." />

      <div className="flex items-center gap-4 p-10">
        <Button size="small">mon premier button</Button>
        <Button
          size="small"
          icon={{ icon: RiAccountCircleFill }}
          iconPosition="left"
        >
          mon premier button
        </Button>
        <Button size="small" icon={{ icon: RiAccountCircleFill }}>
          mon premier button
        </Button>
        <Button size="small" variant="secondary">
          mon premier button
        </Button>
        <Button size="small" variant="outline">
          mon premier button
        </Button>
        <Button size="small" variant="disabled" disabled>
          mon premier button
        </Button>
        <Button
          size="small"
          variant="ico"
          icon={{ icon: RiAccountCircleFill }}
        />
      </div>
      <div className="flex items-center gap-4 p-10">
        <Button>mon premier button</Button>
        <Button variant="secondary">mon premier button</Button>
        <Button variant="outline">mon premier button</Button>
        <Button variant="disabled" disabled>
          mon premier button
        </Button>
        <Button
          size="medium"
          variant="ico"
          icon={{ icon: RiAccountCircleFill }}
        />
      </div>
      <div className="flex items-center gap-4 p-10">
        <Button size="large">mon premier button</Button>
        <Button size="large" variant="secondary">
          mon premier button
        </Button>
        <Button size="large" variant="outline">
          mon premier button
        </Button>
        <Button size="large" variant="disabled" disabled>
          mon premier button
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
