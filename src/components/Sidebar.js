import PropTypes from 'prop-types'

const Sidebar = ({ opened }) => {

  return (
    <div className={`drawer ${opened ? '' : 'hidden'} h-full w-60 flex-shrink-0 shadow bg-base-200`}>
      <div className="drawer-side">
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <a href="#asd">Menu Item</a>
          </li>
          <li>
            <a href="#asd">Menu Item</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  opened: PropTypes.bool.isRequired
}

export default Sidebar
