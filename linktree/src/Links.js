const Links = () => {
    return ( 
        <div className="links">
            <a href="https://mobile.twitter.com/clearystal">
                <button className="link">
                    Twitter
                </button>
            </a>

            <a href="https://training.zuri.team">
                <button className="link" id="btn_zuri">
                    Zuri Team
                </button>
            </a>

            <a href="https://books.zuri.team">
                <button className="link" id="books">
                    Zuri Books
                </button>
            </a>

            <a href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname">
                <button className="link" id="book_python">
                    Python Books
                </button>
            </a>

            <a href="https://background.zuri.team">
                <button className="link" id="pitch">
                    Background Check for Coders
                </button>
            </a>

            <a href="https://books.zuri.team/design-rules">
                <button className="link" id="book_design">
                    Design Books
                </button>
            </a>
        </div>
        
     );
}
 
export default Links;