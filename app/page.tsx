import {
  Header,
  Hero,
  Diferenciais,
  Categorias,
  Depoimentos,
  CTAFinal,
  Footer,
} from "@/components/camadel";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Diferenciais />
        <Categorias />
        <Depoimentos />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
