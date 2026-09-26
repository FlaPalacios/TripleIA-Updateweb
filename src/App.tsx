import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage";
import { OpportunitiesPage } from "./pages/OpportunitiesPage";
import { OpportunityDetailPage } from "./pages/OpportunityDetailPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { TrainingPage } from "./pages/TrainingPage";
import { AboutPage } from "./pages/AboutPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/oportunidades" element={<OpportunitiesPage />} />
        <Route path="/oportunidades/:id" element={<OpportunityDetailPage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/proyectos" element={<ProjectsPage />} />
        <Route path="/capacitaciones" element={<TrainingPage />} />
        <Route path="/nosotros" element={<AboutPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
