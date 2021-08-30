import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const Navigation = ({sidebar, setSidebar}) => {

  // Toggle sidebar open/close
  const toggleSidebar = () => {
    setSidebar({...sidebar, opened: !sidebar.opened})
  }

  return (
    <div className="navbar shadow-lg bg-neutral text-neutral-content">

      <div className="flex-1 px-2 mx-2">
        <Link to="/" className="flex items-center	">
          <span className="material-icons-outlined text-3xl mr-2">food_bank</span>
          <span className="text-xl font-bold font-serif">{process.env.REACT_APP_NAME}</span>
        </Link>
      </div>

      <div className="flex-none hidden px-2 mx-2 lg:flex">
        <div className="flex items-stretch">
          <a className="btn btn-ghost btn-sm rounded-btn" href="#asd">
            <span className="material-icons-outlined text-lg mr-2">category</span> Browse Categories
          </a>
          <a className="btn btn-ghost btn-sm rounded-btn" href="#asd">
            <span className="material-icons-outlined text-lg mr-2">search</span> Search
          </a>
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
