import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const Tag = ({ tag }) => {

  return (
    <Link to={`/categories/${tag}`}>
      <div className="capitalize badge mr-2 p-3">{tag}</div> 
    </Link>
  )
}

Tag.propTypes = {
  tag: PropTypes.string.isRequired
}

export default Tag
