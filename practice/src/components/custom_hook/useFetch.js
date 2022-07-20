import axios from "axios";
import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [isLoading, setIsLoading]  = useState(false);
    const [posts, setPosts] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        const fetchPosts = async () => {
            try {
                const response = await axios.get(url);
                const data = await response.data;
                setPosts(data);
            } catch (error) {
                setError(error);
            }
            setIsLoading(false);
        }

        fetchPosts();
    }, [url]);

    return {posts, error, isLoading};
}

export default useFetch;