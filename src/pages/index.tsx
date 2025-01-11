import { Seo } from "@/ui/components/seo/seo";
// import { Spinner } from "@/ui/design/spinner/spinner";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Footer } from "@/ui/components/footer/footer";
// import { Typography } from "@/ui/design/typography/typography";
export default function Home() {
  return (
    <>
      {/* <Spinner size="large" /> */}
      <Seo title="Aberaise coder" description="Description ..." />
      <Navigation />
      <h3>test</h3>
      <Footer />
    </>
  );
}
