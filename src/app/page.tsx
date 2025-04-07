import { ReactElement } from "react";
import HeroSection from "~/components/landing/hero-section";
import UploadSection from "~/components/landing/upload-section";
import { Separator } from "~/components/ui/separator";

const LandingPage = (): ReactElement => (
    <main className="mx-auto flex flex-col">
        <HeroSection />
        <Separator />
        <UploadSection />
    </main>
);
export default LandingPage;
