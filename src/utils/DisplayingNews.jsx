import React,{useState} from 'react'
import { useGetNewsWeb } from './components/ContextProvider'
import Modal from './components/Modal'

const DisplayingNews = () => {
    const [detail , setDetail] = useState()
    const {news} = useGetNewsWeb()
 
  function handleDetail(article) {
    setDetail(article);
  }

  function closeModal() {
    setDetail(null);
  }
  return (
    <div className="pt-12 mt-12 h-full w-full flex item-center justify-center flex-wrap">
      {news.map((article, index) => (
        <div
          className="h-1/3 w-1/4 text-center m-6 p-2 bg-zinc-300"
          key={index}
        >
          {article.urlToImage && (
            <img
              src={article.urlToImage}
              alt="News article"
              className="h-80 w-96"
            />
          )}
          <h2 className="font-bold">
            {article.title ? article.title.slice(0, 33) : "No title available"}
          </h2>
          <p className="mt-2">
            {article.description
              ? article.description.slice(0, 88)
              : "No description available"}
          </p>
          <p>{article.publishedAt}</p>
          <button className='bg-blue-500 w-24 h-8 border rounded-md ' onClick={() => handleDetail(article)}>View Details</button>
        </div>
      ))}

      {detail && (
        <Modal
          image={detail.urlToImage}
          title={detail.title}
          description={detail.description}
          close={closeModal}
        />
      )}
    </div>
  )
}

export default DisplayingNews
