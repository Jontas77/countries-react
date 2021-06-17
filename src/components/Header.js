const Header = () => {
    return (
        <header className="d-flex justify-content-between align-items-center p-3 header">
            <h2>Where in the world?</h2>
            <button className="btn btn text-sm"><i className="fa fa-moon-o fa-sm header-btn text-sm">{' '}Dark Mode</i></button>
        </header>
    );
};

export default Header;
