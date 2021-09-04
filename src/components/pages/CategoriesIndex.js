import PropTypes from 'prop-types'
import CategoryPreview from '../CategoryPreview';

const CategoriesIndex = ({ categories, articles }) => {

  const getFirstArticleInCategory = (category) => {
    return articles.find(article => article.tags.includes(category));
  }

  return (<div className="h-full p-8">

    { Object.keys(categories).map(categoryGroup => (

      <div key={categoryGroup} className="mb-24">
        <h4 className="text-3xl font-bold capitalize mb-8" >{categoryGroup}</h4>
        <div className="grid grid-flow-row grid-cols-4 gap-4">
          {categories[categoryGroup].map(category => (
            <CategoryPreview 
              key={category} 
              category={category} 
              article={getFirstArticleInCategory(category)}>  
            </CategoryPreview>
          ))}
        </div>
      </div>
      
    ))}

  </div>)
}

CategoriesIndex.propTypes = {
  categories: PropTypes.object.isRequired,
  articles: PropTypes.array.isRequired,
}

export default CategoriesIndex