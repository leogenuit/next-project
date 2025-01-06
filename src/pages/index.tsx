import { Seo } from "@/ui/components/seo";
import { Typography } from "@/ui/design/typography/typography";
export default function Home() {
  return (
    <>
      <Seo title="Aberaise coder" description="Description ..." />

      <div>
        <Typography
          theme="primary"
          variant="body-sm"
          component="p"
          weight="regular"
        >
          Aberaise Coder
        </Typography>
        <Typography
          variant="h1"
          component="h1"
          weight="regular"
          theme="secondary"
        >
          Aberaise Coder
        </Typography>
        <Typography variant="lead" component="h1" weight="regular">
          Aberaise Coder
        </Typography>
        <Typography variant="caption4" weight="medium" component="h1">
          Aberaise Coder
        </Typography>
      </div>
    </>
  );
}
