import './searchTool.style.css'

export const SearchTool = () => { 
    return(
    <section id="search">
    <input type="text" id="searchInput" placeholder="Type ingredients:" />
    <button type="submit" id="submit">Search <i className="fa-solid fa-magnifying-glass"></i></button>
    </section> 

    )
}