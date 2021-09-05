import PropTypes from 'prop-types'
import CategoryPreview from '../CategoryPreview';
import { useEffect } from 'react'

const CategoriesIndex = ({ categories, articles }) => {

  useEffect(() => {
    document.title = process.env.REACT_APP_NAME;
  }, []);

  const getFirstArticleInCategory = (category) => {
    return articles.find(article => article.tags.includes(category));
  }

  return (<div className="h-full p-8">

    { Object.keys(categories).map(categoryGroup => (

      <div key={categoryGroup} className="mb-24">
        <h4 className="text-3xl font-bold capitalize mb-8" >{categoryGroup}</h4>
        <div className="grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 ">
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