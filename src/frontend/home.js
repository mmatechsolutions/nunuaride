import image from "../frontend/images/mazdaDemio.jpg"

const Home = () => {
    return ( 
        <div className="home">
            <div className="top-badge">
                <div className="logo">
                    <h1>NunuaRide</h1>
                </div>
                <div className="menu">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/contact-us">Contact Us</a></li>
                        <li><a href="/">Blog</a></li>
                    </ul>
                </div>
            </div>
            <div className="secondary-menu">
                <ul>
                    <li><button onclick="location.href='/'">Toyota</button></li>
                    <li><button onclick="location.href='/'">Mazda</button></li>
                    <li><button onclick="location.href='/'">Audi</button></li>
                    <li><button onclick="location.href='/'">Honda</button></li>
                    <li><button onclick="location.href='/'">Isuzu</button></li>
                    <li><button onclick="location.href='/'">Lexus</button></li>
                    <li><button onclick="location.href='/'">Nissan</button></li>
                    <li><button onclick="location.href='/'">Subaru</button></li>
                    <li><button onclick="location.href='/'">Volkswagen</button></li>
                    <li><button onclick="location.href='/'">Volvo</button></li>
                </ul>
            </div>

            <div className="filter">
                <h1>Filter</h1>
            </div>
            

            <div className="cars">
                <div className="show">
                    <img src={image} alt="Mazda" />
                    <h4>New</h4>
                    <h3>Mazda Demio</h3>
                    <p>Ksh. 1,400,000</p>
                    <button>Inquire</button>
               </div>

               <div className="show">
                    <img src={image} alt="Mazda" />
                    <h4>New</h4>
                    <h3>Mazda Demio</h3>
                    <p>Ksh. 1,400,000</p>
                    <button>Inquire</button>
               </div>

               <div className="show">
                    <img src={image} alt="Mazda" />
                    <h4>New</h4>
                    <h3>Mazda Demio</h3>
                    <p>Ksh. 1,400,000</p>
                    <button>Inquire</button>
               </div>

               <div className="show">
                    <img src={image} alt="Mazda" />
                    <h4>New</h4>
                    <h3>Mazda Demio</h3>
                    <p>Ksh. 1,400,000</p>
                    <button>Inquire</button>
               </div>
            </div>
        </div>
     );
}
 
export default Home;