import { Seo } from "@/ui/components/seo";
import { Typography } from "@/ui/design/typography/typography";
export default function Home() {
  return (
    <>
      <Seo title="Aberaise coder" description="Description ..." />
      <div>
        <Typography variant="h1" component="h1" weight="regular">
          Aberaise Coder
        </Typography>
      </div>
    </>
  );
}
