import PropTypes from 'prop-types'
import { Link, useParams } from "react-router-dom";
import { useEffect } from 'react'

const Sidebar = ({ sidebar, setSidebar, articles }) => {

  let { articleID } = useParams();

  useEffect(() => {
    setSidebar(s => ({...s, rendered: !!s.sidebarRef.current}))
  }, [setSidebar]);

  return (
    <div ref={sidebar.sidebarRef} className={`drawer ${sidebar.opened ? '' : 'hidden'} h-full w-60 flex-shrink-0 shadow bg-base-200`}>
      <div className="drawer-side">
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

          { articles.map(article => (
            <li key={article.id}>
              <Link 
                to={`/recipes/${article.id}/`}
                className={ article.id === articleID ? 'bg-purple-600' : '' }
              >
                {article.prettyName}
              </Link>
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
