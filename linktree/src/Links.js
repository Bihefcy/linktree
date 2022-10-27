const Links = () => {
    return ( 
        <div className="links">
            <div className="linka">
                <a href="https://mobile.twitter.com/clearystal" target="_blank" rel="noreferrer">
                    <button className="link">
                    Twitter
                    </button>
                    
                </a>
            </div>
            
            <div className="linka">
                <a href="https://training.zuri.team" target="_blank" rel="noreferrer">
                    <button className="link" id="btn_zuri">
                    Zuri Team
                    </button>
                </a>
            </div>
            
            <div className="linka">
                <a href="https://books.zuri.team" target="_blank" rel="noreferrer">
                    <button className="link" id="books">
                    Zuri Books
                    </button>
                    <div className="link-text">
                        <p>You can find different books about design and coding by clicking on this link.</p>
                    </div>
                </a>
            </div>
            
            <div className="linka">
               <a href="https://books.zuri.team/python-for-beginners?ref_id=Victor" target="_blank" rel="noreferrer">
                    <button className="link" id="book_python">
                    Python Books
                    </button>
                    <div className="link-text">
                        <p>Python's extensive uses in web development, complex data analysis, and machine learning drive its popularity. To get started on learning this programmng language, click on this link.</p>
                    </div>
                </a> 
            </div>
            
            <div className="linka">
                <a href="https://background.zuri.team" target="_blank" rel="noreferrer">
                    <button className="link" id="pitch">
                    Background Check for Coders
                    </button>
                    <div className="link-text">
                        <p>Job interviews remain the most important part of making a new hire, so therefore you'll need to find out the background of the developer you want to hire. Zuri Background Check offers the best way to accomplish this.</p>
                    </div>
                </a>
            </div>
            
            <div className="linka">
                <a href="https://books.zuri.team/design-rules" target="_blank" rel="noreferrer">
                    <button className="link" id="book_design">
                    Design Books
                    </button>
                    <div className="link-text">
                        <p>The HNG Design Rules Book gives you the tips & guidelines you need to create truly professional designs, by addressing errors that could you get you disqualified. Remains a fundamental necessity to overcome the hurdles of each challenge meted out.</p>
                    </div>
                </a>
            </div>
            
        </div>
        
     );
}
 
export default Links;