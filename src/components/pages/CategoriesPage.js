import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const CategoriesPage = ({ categories }) => {
  return (<div className="h-full p-8">

    { Object.keys(categories).map(key => (
      <div key={key} className="mb-8">
        <h4>{key}</h4>
        <div>
          {categories[key].map(tag => (
            <Link to={`/tags/${tag}`}>{tag}</Link>
          ))}
        </div>
      </div>
    ))}

  </div>)
}

CategoriesPage.propTypes = {
  categories: PropTypes.object.isRequired,
}

export default CategoriesPage