import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import ArticleThumbnail from './ArticleThumbnail';

const CategoryPreview = ({ category, article }) => {

  return (
    <div>
      <Link to={`/categories/${category}`}>
        <div>
          { article ? (
            <ArticleThumbnail article={article} />
          ) : (
            <div className="border p-8" ></div>
          )}
          
        </div>

        <h3 className="capitalize text-2xl font-bold mb-2">{category}</h3>
      </Link>
    </div>
  )
}

CategoryPreview.propTypes = {
  category: PropTypes.string.isRequired,
  article: PropTypes.object,
}

export default CategoryPreview
