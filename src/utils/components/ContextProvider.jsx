import React, { createContext, useContext, useState, useEffect } from "react";
import fetchNewsData from "../api";
import { useLocation } from "react-router-dom";

const ArticlesContext = createContext();

export const ArticleProvider = ({ children }) => {
    const [news, setNews] = useState([]);
    const location = useLocation();

    const fetchNews = async () => {
        try {
            const data = await fetchNewsData(location.pathname);
            setNews(data.articles);
        } catch (error) {
            console.error("Error fetching news:", error);
        }
    };

    useEffect(() => {
        fetchNews();
    }, [location.pathname]); 

    return (
        <ArticlesContext.Provider value={{ news, setNews, fetchNews }}>
            {children}
        </ArticlesContext.Provider>
    );
};

export const useGetNewsWeb = () => {
    return useContext(ArticlesContext);
};
