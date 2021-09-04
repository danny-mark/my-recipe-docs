import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import ArticleThumbnail from './ArticleThumbnail';

const ArticleCard = ({ article }) => {

  return (
    <Link to={`/recipes/${article.id}`} className="">
      <ArticleThumbnail article={article} />
      <h4 className="text-2xl">{ article.prettyName }</h4>
    </Link>
  )
}

ArticleCard.propTypes = {
  article: PropTypes.object.isRequired,
}

export default ArticleCard
