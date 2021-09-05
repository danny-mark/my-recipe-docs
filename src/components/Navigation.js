import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const Navigation = ({sidebar, setSidebar}) => {

  // Toggle sidebar open/close
  const toggleSidebar = () => {
    setSidebar({...sidebar, opened: !sidebar.opened})
  }

  return (
    <div className="navbar fixed top-0 left-0 w-full shadow-lg bg-neutral text-neutral-content">

      <div className="flex-1 px-2 mx-2">
        <Link to="/" className="flex items-center	" title={process.env.REACT_APP_NAME}>
          <span className="material-icons-outlined text-3xl mr-2">food_bank</span>
          <span className="text-xl font-bold font-serif hidden sm:inline">{process.env.REACT_APP_NAME}</span>
        </Link>
      </div>

      <div className="flex-none">
        <div className="flex items-stretch">
          <Link to="/" className="btn btn-ghost btn-sm rounded-btn hidden md:flex">
            <span className="material-icons-outlined text-lg mr-2">category</span> Browse Categories
          </Link>

          <label className="flex items-center btn btn-ghost btn-sm rounded-btn">
            <span className="material-icons-outlined text-lg mr-2">search</span> 
            <input type="text" placeholder="SEARCH" className="bg-transparent text-md font-semibold placeholder-white outline-none"/>
          </label>

        </div>
      </div>

      { sidebar.rendered && 
        (<div className="flex-none">
          <button className="btn btn-square btn-ghost" onClick={toggleSidebar}>
            <span className="material-icons-outlined text-2xl">menu</span>
          </button>
        </div>)
      }
    </div>
  )
}

Navigation.propTypes = {
  sidebar: PropTypes.object.isRequired,
  setSidebar: PropTypes.func.isRequired
}

export default Navigation
