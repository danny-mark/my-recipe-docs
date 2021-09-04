import { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Article from './components/Article'
import Navigation from './components/Navigation'
import CategoriesIndex from './components/pages/CategoriesIndex'
import CategoriesShow from './components/pages/CategoriesShow'
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
    opened: window.innerWidth > 1000
  });

  useEffect(() => {
    const sidebarToggleOnResize = () => setSidebar(s => ({...s, opened: window.innerWidth > 1000}));

    window.addEventListener("resize", sidebarToggleOnResize);
    return () => window.removeEventListener("resize", sidebarToggleOnResize);
  }, []);

  return (<Router>
    <div className="h-full">
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

      <Route path="/recipes/:articleID/"
        exact
        render={(props) => (
          <>
          { articles.length ? (
              <div className="flex flex-row h-full">
                <Sidebar sidebar={sidebar} setSidebar={setSidebar} articles={articles} />
                <Article articles={articles} />
              </div>
            ) : (
              <p>Loading</p>
            )
          }
          </>
        )}
      />

    </div>
  </Router>)
}

export default App;
