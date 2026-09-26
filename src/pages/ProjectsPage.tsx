import { PageHeader } from "../components/ui/PageHeader";
import { Observatory } from "../components/observatory/Observatory";
import { Evidence } from "../components/home/Evidence";

export function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Proyectos"
        title="Observatorio de proyectos"
        description="Seguimos de cerca los concursos y la inversión en ciencia, tecnología e innovación, y compartimos los resultados de los proyectos que acompañamos."
      />
      <Observatory />
      <Evidence />
    </>
  );
}
