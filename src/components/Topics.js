import React from 'react';
import { List } from 'semantic-ui-react';
import firebase from '../utils/firebase';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
// collection() 取得目標集合
// getDocs() 取得文件

// 資料庫
const db = getFirestore(firebase);

let Topics = () => {
  // 存放抓取的資料，初始值為空陣列
  const [topics, setTopics] = React.useState([]);

  React.useEffect(() => {
    // v8
    // firebase
    //   .firestore()
    //   .collection('topics')
    //   .get()
    //   .then(collectionSnapshot => {
    //     const data = collectionSnapshot.docs.map(doc => {
    //       return doc.data();
    //     });
    //     console.log(data);
    // });

    // v9
    const dbRef = collection(db, 'topics');
    // console.log(dbRef);
    const docData = getDocs(dbRef);
    // console.log(docData);
    docData.then(res => {
      let data = res.docs.map(doc => {
        return doc.data();
      });
      // console.log(data);
      setTopics(data);
    });
  }, []);

  return (
    // animated = hover動畫效果
    // selection = 反灰效果
    <List animated selection>
      {topics.map(topic => {
        return <List.Item>{topic.name}</List.Item>;
      })}
    </List>
  );
};

export default Topics;
