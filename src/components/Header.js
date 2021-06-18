const Header = () => {
    return (
        <header className="d-flex justify-content-between align-items-center p-3 header">
            <h2>Where in the world?</h2>
            <div>
            <i className="fa fa-moon-o fa-sm header-btn text-white"></i><button className="btn btn text-white color-switch">Dark Mode</button>
            </div>
        </header>
    );
};

export default Header;
