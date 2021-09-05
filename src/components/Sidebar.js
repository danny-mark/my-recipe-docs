import PropTypes from 'prop-types'
import { Link, useParams } from "react-router-dom";
import { useEffect } from 'react'

const Sidebar = ({ sidebar, setSidebar, articles }) => {

  let { articleID } = useParams();

  useEffect(() => {
    setSidebar(s => ({...s, rendered: !!s.sidebarRef.current}))

    return () => {
      setSidebar(s => ({...s, rendered: false}));
    };
  }, [setSidebar]);

  return (
    <div ref={sidebar.sidebarRef} className={`drawer ${sidebar.opened ? '' : 'hidden'} w-60 xl:w-72 flex-shrink-0 shadow bg-white overflow-y-scroll z-50 absolute top-16 bottom-0 md:relative md:top-auto md:bottom-auto`}>
      <div className="drawer-side">

        <ul className="pt-2">

          { articles.map(article => (
            <li key={article.id} 
              className={`px-4 py-2 ${article.id === articleID ? 'font-bold text-purple-600' : ''} hover:text-purple-600`}>
              <Link to={`/recipes/${article.id}/`} >{article.prettyName}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  sidebar: PropTypes.object.isRequired,
  setSidebar: PropTypes.func.isRequired,
  articles: PropTypes.array.isRequired,
}

export default Sidebar
