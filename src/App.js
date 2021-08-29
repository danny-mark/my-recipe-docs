import { useState, useEffect } from 'react'

import Article from './components/Article'
import Navigation from './components/Navigation'
import Sidebar from './components/Sidebar'

function App() {

  const [sidebarOpened, setSidebarOpened] = useState(window.innerWidth > 1000);

  // Toggle sidebar open/close
  const toggleSidebar = () => {
    setSidebarOpened(!sidebarOpened)
  }

  useEffect(() => {
    const sidebarToggleOnResize = () => setSidebarOpened(window.innerWidth > 1000);

    window.addEventListener("resize", sidebarToggleOnResize);

    return () => window.removeEventListener("resize", sidebarToggleOnResize);
  }, []);

  return (
    <div className="h-full">
      <Navigation onMenuToggle={toggleSidebar} />

      <div className="flex flex-row h-full">
        <Sidebar opened={sidebarOpened}/>
        <Article title="Fluffy Rice" />
      </div>
    </div>
  );
}

export default App;
