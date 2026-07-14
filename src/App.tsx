import { useNavigation } from './hooks/useNavigation';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LandingPage } from './pages/LandingPage';
import { ProfilePage } from './pages/ProfilePage';
import { AnalysisPage } from './pages/AnalysisPage';
import { RoadmapPage } from './pages/RoadmapPage';
import { DashboardPage } from './pages/DashboardPage';
import { AboutPage } from './pages/AboutPage';
import type { PageName } from './types';

function App() {
  const { currentPage, navigate } = useNavigation();

  const renderPage = () => {
    switch (currentPage as PageName) {
      case 'landing':
        return <LandingPage navigate={navigate} />;
      case 'profile':
        return <ProfilePage navigate={navigate} />;
      case 'analysis':
        return <AnalysisPage navigate={navigate} />;
      case 'roadmap':
        return <RoadmapPage navigate={navigate} />;
      case 'dashboard':
        return <DashboardPage navigate={navigate} />;
      case 'about':
        return <AboutPage navigate={navigate} />;
      default:
        return <LandingPage navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-ink-50">
      <Navbar currentPage={currentPage} navigate={navigate} />
      <main className="flex-1">{renderPage()}</main>
      <Footer navigate={navigate} />
    </div>
  );
}

export default App;
