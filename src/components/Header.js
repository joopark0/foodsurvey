const Header = (props) => {
  const { navigate } = props;
  return (
    <div>
      <nav className="navmain">
        <nav className="navleft" id="navLeft" onClick={() => navigate('/')}>
          Food Survey Completer
        </nav>
        <nav className="navright">
          DISCLAIMER: As this is a small project if it takes more than 15
          seconds, please refresh and try again as Heroku idle's unused apps
          <br></br>
          *Currently only Wendy's works, working on other stores!
        </nav>
      </nav>
    </div>
  );
};

export default Header;
