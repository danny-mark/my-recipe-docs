import { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Article from './components/Article'
import Navigation from './components/Navigation'
import CategoriesIndex from './components/pages/CategoriesIndex'
import CategoriesShow from './components/pages/CategoriesShow'
import SearchResults from './components/pages/SearchResults'
import Sidebar from './components/Sidebar'
import indexJSON from './index.json'

function App() {

  const [categories, setCategories] = useState({});
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Populate the articles object using the recipes index.json.
    setCategories(indexJSON.categories);
    setArticles(indexJSON.articles);
  }, []);


  // UI 
  const sidebarRef = useRef();
  const [sidebar, setSidebar] = useState({
    sidebarRef: sidebarRef,
    rendered: false,
    openStateBasedOnWidth: () => window.innerWidth > 1000,
    opened: window.innerWidth > 1000
  });

  useEffect(() => {
    // Returns the sidebar to the default open/close state based on screen size.
    // On desktop it's open, on mobile it's closed.
    const resetSidebar = () => setSidebar(s => ({...s, opened: s.openStateBasedOnWidth()}));

    window.addEventListener("resize", resetSidebar);
    return () => window.removeEventListener("resize", resetSidebar);
  }, []);

  return (<Router>
    <div className="h-full pt-16">
      <Navigation sidebar={sidebar} setSidebar={setSidebar} />

      <Route path="/"
        exact
        render={(props) => (
          <CategoriesIndex {...props} categories={categories} articles={articles} />
        )}
      />

      <Route path="/categories/:category/"
        exact
        render={(props) => (
          <CategoriesShow {...props} articles={articles} />
        )}
      />

      <Route path="/search/:query/"
        exact
        render={(props) => (
          <SearchResults {...props} articles={articles} />
        )}
      />

      <Route path="/recipes/:articleID/"
        exact
        render={(props) => (
          <div className="flex flex-row h-full">
          { articles.length ? (
            <>
              <Sidebar sidebar={sidebar} setSidebar={setSidebar} articles={articles} />
              <Article articles={articles} />
            </>
            ) : (
            <p>Loading</p>
            )
          }
          </div>
        )}
      />

    </div>
  </Router>)
}

export default App;
