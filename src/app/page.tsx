import FrontPage from "@/sections/FrontPage";
import BusinessPage from "@/sections/BusinessPage";
import SportsPage from "@/sections/SportsPage";
import ProfilePage from "@/sections/ProfilePage";
import NewspaperIntro from "@/components/NewspaperIntro";
import SiteShell from "@/components/SiteShell";

export default function Home() {
  return (
    <main>
      <NewspaperIntro />
      <SiteShell
        newspaperPages={[
          <FrontPage key="front" />,
          <BusinessPage key="business" />,
          <SportsPage key="sports" />,
          <ProfilePage key="profile" />,
        ]}
      />
    </main>
  );
}
