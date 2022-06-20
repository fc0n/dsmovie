import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css';

function NavBar() {

  return (
    <header>
      <nav className="container">
        <div className="dsmovieNavContent">
          <h1>DSMovie</h1>
          <a href="https://github.com/fc0n">
            <div className="dsmovieContactContainer">
              <GithubIcon />
              <p className="dsmovieContactLink">/fc0n</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;