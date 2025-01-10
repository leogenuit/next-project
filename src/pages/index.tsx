import { Seo } from "@/ui/components/seo/seo";
// import { Spinner } from "@/ui/design/spinner/spinner";
import { Navigation } from "@/ui/components/navigation/navigation";
// import { Typography } from "@/ui/design/typography/typography";
export default function Home() {
  return (
    <>
      {/* <Spinner size="large" /> */}
      <Seo title="Aberaise coder" description="Description ..." />
      <Navigation />
    </>
  );
}
