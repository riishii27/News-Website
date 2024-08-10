import { useLocation } from "react-router-dom";

const fetchNewsData = async (path) => {
    const response = await fetch(
        `https://newsapi.org/v2/everything?apiKey=1e1dd07a55d945a99e226826e9758e8e&q=${path}`
    );
    if (!response.ok) {
        throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    return data;
};

export default fetchNewsData;
