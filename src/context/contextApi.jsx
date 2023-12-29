import { createContext, useEffect, useState } from "react";
import getData from "../utils/api";


export const Context = createContext();

function AppContext(props) {
    const [loading, setLoading] = useState(false);
    const [selectCategory, setSelectCategory] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [mobileMenu, setMobileMenu] = useState();
    const [showExpandNav, setShowExpandNav] = useState(false);

    useEffect(() => {
        onHandleSelectCategory(selectCategory);
    }, [selectCategory])

    const onHandleSelectCategory = (query) => {
        setLoading(false);
        // getData.search(`search/?q${query}`).then(({ contents }) => {
        //     setSearchResult(contents)
        //     setLoading(false)
        // }).catch(err => {
        //     console.log(err);
        // })
    }

    return(
        <Context.Provider value={{
            loading,
            setLoading,
            selectCategory,
            setSelectCategory,
            searchResult,
            setSearchResult,
            mobileMenu,
            setMobileMenu,
            showExpandNav,
            setShowExpandNav,
        }}>
            {props.children}
        </Context.Provider>
    )
}

export default AppContext;