import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useParams } from "react-router-dom"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Tag from './Tag'

const Article = ({ articles }) => {

  let { articleID } = useParams();
  const [activeArticle, setActiveArticle] = useState({});
  const [articleContent, setArticleContent] = useState('');

  useEffect(() => {

    const getArticleByID = (articleID) => {
      return articles.find(a => a.id === articleID);
    }

    setActiveArticle(getArticleByID(articleID));
  }, [articles, articleID]);

  useEffect(() => {

    const fetchActiveArticleContent = async () => {

      let article = activeArticle;
      if (!article.id) {
        setArticleContent('Ooops, article not found.');
        return;
      };

      const res = await fetch(`/recipes/${article.id}/${article.id}.md`);
      const content = await res.text();

      setArticleContent(content);
    }

    fetchActiveArticleContent();
  }, [activeArticle]);

  return (
    <div className="max-w-full flex-shrink p-16">

      {articleContent.length ? (
        <div>

          { activeArticle.tags.length && (
            <div className="flex mb-8">
              { activeArticle.tags.map(tag => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
          )}

          <div className="prose">
            <ReactMarkdown children={articleContent} remarkPlugins={[remarkGfm]} />
          </div>

        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  )
}

Article.propTypes = {
  articles: PropTypes.array.isRequired
}

export default Article
