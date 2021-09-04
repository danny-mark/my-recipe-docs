import PropTypes from 'prop-types'

const ArticleThumbnail = ({ article }) => {

  return (
    <figure>
      <img className="rounded-lg mb-4"
        src={`/recipes/${article.id}/title.jpg`} 
        alt={ article.prettyName } ></img>
    </figure> 
  )
}

ArticleThumbnail.propTypes = {
  article: PropTypes.object.isRequired,
}

export default ArticleThumbnail
