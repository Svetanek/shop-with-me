import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAq-r-oB6-Sd4ngoriM3RlGLjeh7zJNSxQ',
  authDomain: 'shop-db-44779.firebaseapp.com',
  databaseURL: 'https://shop-db-44779.firebaseio.com',
  projectId: 'shop-db-44779',
  storageBucket: 'shop-db-44779.appspot.com',
  messagingSenderId: '826276724102',
  appId: '1:826276724102:web:98098056af1337868e4007',
  measurementId: 'G-WYT0FEBMLY',
};
firebase.initializeApp(config);

export const createUserProfileDoc = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  // const collectionRef = firestore.collection('users');
  // const collectionSnapshot = await collectionRef.get();
  // console.log('CollectionSnapshot=', {
  //   collection: collectionSnapshot.docs.map(doc => doc.data()),
  // });

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocs = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    // const newDocRef = collectionRef.doc(obj.title); ===> obj.title used then as ID
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((accum, collection) => {
    accum[collection.title.toLowerCase()] = collection;
    return accum;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const getUserCartRef = async userId => {
  const cartRef = firestore.collection('carts').where('userId', '==', userId);
  const snapshot = await cartRef.get();
  if (snapshot.empty) {
    //as an alternative
    //  const cartDocRef = firestore.collection('carts').doc(userId);
    const cartDocRef = firestore.collection('carts').doc();
    await cartDocRef.set({ userId, cartItems: [] });
    return cartDocRef;
  } else {
    return snapshot.docs[0].ref;
  }
};

//need to try later alternative for cart in FB:
// export const updateCart = (userAuth, cartItems) => {
//   const userRef = firestore.doc(`users/${userAuth.uid}`);
//   userRef.update({[`${userAuth.uid}.cart`]: cartItems})
// };

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
