import { ReactElement } from "react";
import HeroSection from "~/components/hero-section";
import { Separator } from "~/components/ui/separator";

const LandingPage = (): ReactElement => (
    <main className="flex flex-col">
        <HeroSection />
        <Separator />
    </main>
);
export default LandingPage;
