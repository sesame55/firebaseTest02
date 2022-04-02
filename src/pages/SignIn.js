import React from 'react';
import { Menu, Form, Container, Message } from 'semantic-ui-react';
// 使用semantic-ui-react提供的元件
// Container 可使邊框不貼頁面

// 引入firebase
import firebase from '../utils/firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

// 導回首頁
// import { useHistory } from 'react-router-dom'; //不能用，應該是之前版本的
import { useNavigate } from 'react-router-dom';

let SignIn = () => {
  const [activeItem, setActiveItem] = React.useState('register');
  // useState 是 內建的function
  // setActiveItem 是自訂的function
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // 輸出錯誤訊息
  const [errMessage, setErrMessage] = React.useState('');

  // loading
  const [isLoading, setLoading] = React.useState(false);

  // 呼叫導回首頁的物件
  // const history = useHistory(); //不能用，應該是之前版本的
  const navigate = useNavigate();

  // auth
  const auth = getAuth();

  // 傳送表單的function
  let onSubmit = () => {
    setLoading(true);

    if (activeItem === 'register') {
      // 註冊
      // then 是 callback function

      // firebase v8
      // firebase
      //   .auth()
      //   .createUserWithEmailAndPassword(email, password)
      //   .then(() => {
      //     // 把使用者導回首頁
      //     // history.push('/');
      //     useNavigate('/');
      //     // navigate('/');
      //   }).catch(err => {
      // err.code;
      // });

      // firebase v9
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate('/');
          setLoading(false);
        })
        .catch(err => {
          // const errCode = err.code;
          // const errMessage = err.message;
          // console.log(errCode);
          // console.log(errMessage);
          switch (err.code) {
            case 'auth/email-already-in-use':
              setErrMessage('信箱已存在');
              break;
            case 'auth/weak-password':
              setErrMessage('密碼長度少於6字元');
              break;
            case 'auth/internal-error':
              setErrMessage('信箱格式錯誤');
              break;
            default:
              break;
          }
          setLoading(false);
        });
    } else if (activeItem === 'signIn') {
      // firebase
      //   .auth()
      //   .signInWithEmailAndPassword(email, password)
      //   .then(() => {
      //     // history.push('/');
      //     useNavigate('/');
      //     // navigate('/');
      //   });
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate('/');
          setLoading(false);
        })
        .catch(err => {
          // const errCode = err.code;
          // const errMessage = err.message;
          // console.log(errCode);
          // console.log(errMessage);
          switch (err.code) {
            case 'auth/wrong-password':
              setErrMessage('密碼錯誤');
              break;
            case 'auth/user-not-found':
              setErrMessage('信箱不存在');
              break;
            case 'auth/invalid-email':
              setErrMessage('信箱格式錯誤');
              break;
            case 'auth/internal-error':
              setErrMessage('信箱格式錯誤');
              break;
            default:
              break;
          }
          setLoading(false);
        });
    }
  };

  return (
    <Container>
      <Menu widths="2">
        {/* widths = 切成幾等分 */}
        <Menu.Item
          active={activeItem === 'register'}
          onClick={() => {
            setErrMessage(''); //清空顯示欄位
            setActiveItem('register');
          }}
        >
          註冊
        </Menu.Item>
        <Menu.Item
          active={activeItem === 'signIn'}
          onClick={() => {
            setErrMessage('');
            setActiveItem('signIn');
          }}
        >
          登入
        </Menu.Item>
      </Menu>
      <Form onSubmit={onSubmit}>
        <Form.Input label="信箱" value={email} onChange={e => setEmail(e.target.value)} placeholder="請輸入信箱" />
        <Form.Input
          label="密碼"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="請輸入密碼"
          type="password"
        />
        {/* type='password' 可以把輸入的密碼轉成暗碼 */}
        {errMessage && <Message color="red">{errMessage}</Message>}
        <Form.Button color="blue" loading={isLoading}>
          {/* 隨上方註冊登入切換按鈕 */}
          {activeItem === 'register' && '註冊'}
          {activeItem === 'signIn' && '登入'}
        </Form.Button>
      </Form>
    </Container>
  );
};

export default SignIn;
