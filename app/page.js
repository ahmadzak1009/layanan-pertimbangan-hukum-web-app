import DasarHukum from "./_components/DasarHukum";
import Hero from "./_components/Hero";
import Layanan from "./_components/Layanan";
import Tentang from "./_components/Tentang";

export default function Home() {
  return (
    <div>
      <Hero />
      <Layanan />
      <DasarHukum />
      <Tentang />
    </div>
  );
}

export const metadata = {
  title: "Layanan Pertimbangan Hukum Kejaksaan Negeri Tana Toraja",
  description: "Layanan Pertimbangan Hukum Kejaksaan Negeri Tana Toraja",
};
