import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import SignIn from './pages/SignIn';
import Posts from './pages/Post';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Posts />} />
        {/* 首頁 */}
        <Route path="/signIn" element={<SignIn />} />
        {/* 註冊登入 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
