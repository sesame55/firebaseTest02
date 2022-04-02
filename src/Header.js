import React from 'react';
import { Menu, Search, Container } from 'semantic-ui-react';
//載入由 semantic-ui-react 提供的 Menu 元件
import { Link } from 'react-router-dom';

// firebase
import firebase from './utils/firebase';
import { getAuth, onAuthStateChanged, signOut} from 'firebase/auth';

function Header() {
  const [user, setUser] = React.useState(null); //因不確定是否有登入，初始值是null

  // auth
  const auth = getAuth();

  //監聽使用者狀態
  React.useEffect(() => {
    // firebase.auth().onAuthStateChanged(currentUser => {});
    onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });
  }, []);

  return (
    <Container>
      <Menu>
        <Menu.Item as={Link} to="/">
          Home
        </Menu.Item>
        <Menu.Item>
          <Search />
        </Menu.Item>
        <Menu.Menu position="right">
          {user ? (
            <>
              <Menu.Item as={Link} to="/newPost">
                發表文章
              </Menu.Item>
              <Menu.Item as={Link} to="/my">
                會員
              </Menu.Item>
              <Menu.Item onClick={() => {
                signOut(auth);
              }}>登出</Menu.Item>
            </>
          ) : (
            <Menu.Item as={Link} to="/signIn">
              註冊 / 登入
            </Menu.Item>
          )}
        </Menu.Menu>
      </Menu>
    </Container>
  );
}

export default Header;
