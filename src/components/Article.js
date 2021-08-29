import PropTypes from 'prop-types'

const Article = ({ title }) => {
  return (
    <div className="flex-shrink p-16">
      <h1 className="text-3xl">{title}</h1>
    </div>
  )
}

Article.propTypes = {
  title: PropTypes.string.isRequired
}

export default Article
