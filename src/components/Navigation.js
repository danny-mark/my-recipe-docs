import PropTypes from 'prop-types'

const Navigation = ({onMenuToggle}) => {
  return (
    <div className="navbar shadow-lg bg-neutral text-neutral-content">

      <div className="flex-1 px-2 mx-2">
        <span className="material-icons-outlined text-3xl mr-2">food_bank</span>
        <span className="text-xl font-bold font-serif">{process.env.REACT_APP_NAME}</span>
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

      <div className="flex-none">
        <button className="btn btn-square btn-ghost" onClick={onMenuToggle}>
          <span className="material-icons-outlined text-2xl">menu</span>
        </button>
      </div>
    </div>
  )
}

Navigation.propTypes = {
  onMenuToggle: PropTypes.func.isRequired
}

export default Navigation
