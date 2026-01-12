import "../styles/homepage.css";
import Hero from './homepage/hero';
import Highlight from './homepage/highlight';
import Layanan from './homepage/layanan';
import Projek from './homepage/project';
import Testimoni from './homepage/testimoni';
import Tentang from './homepage/tentang';
import Kontak from './homepage/kontak';
export default function HomePage() {
  return (
    <>
      <Hero />
      <Highlight />
      <Layanan />
      <Projek />
      <Testimoni />
      <Tentang />
      <Kontak />
    </>
  );
}
