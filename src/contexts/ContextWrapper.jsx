import { useCookieContext } from "./CookieContext";
import { createContext,useEffect,useState } from "react"
import { useNavigate } from "react-router-dom";

const MyContext = createContext();
export default MyContext;

export const ContextWrapper = ({children}) =>{
    const {cookies} = useCookieContext();
    const [categories, setCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState("All");
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currency,setCurrency] = useState('dollar')
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };
  
    const rates = {
        'dollar': 1,
        'manat': 1.7,
      };
    
      const convertCurrency = (amount) => {
        return amount * rates[currency];
      }

    const fetchData = async (url) => {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            return null;
        }
    };

    
    const getProductById = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/products/${id}`);
            const data = await response.json()
            if (!response.ok) {
                throw new Error('Failed to fetch product');
            }
            return data;
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    const getProducts = async () => {
        const data = await fetchData("http://localhost:5000/api/products");
        if (data) {
            setProducts(data.product);
            setCurrency(currency)
        }
    };

    const getCategories = async () => {
        const data = await fetchData("http://localhost:5000/api/products");
        if (data) {
            const { product } = data;
            const cat = Array.from(new Set(product.map(p => p.category)));
            setCategories(["All", ...cat]);
        }
    };

    const filterProducts = (category) => {
        if (category === "All") {
            setFilteredProducts([...products]);
        } else {
            const filtered = products.filter((p) => p.category === category);
            setFilteredProducts(filtered);
        }
    };


    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    const contextData = {
        getCategories,
        categories,
        navigate,
        currentCategory,
        setCurrentCategory,
        filterProducts,
        filteredProducts,
        products,
        getProducts,
        getProductById,
        currency,
        setCurrency,
        convertCurrency,
        cartItems,
        addToCart
    };


    return <MyContext.Provider value={contextData}>{children}</MyContext.Provider>
};