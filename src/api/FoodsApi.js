import firebase from "../../config/database.js";

export function login({ email, password }) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((value) => {});
}

export function signup({ email, password, displayName }) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userInfo) => {
      // userInfo.user.updateProfile({displayName: displayName.trim()}).then(()=>{})
    });
}

export function signout(onSignedOut) {
  firebase
    .auth()
    .signOut()
    .then(() => {
      onSignedOut();
    });
}

export function subscribeToAuthChanged(authStateChanged) {
  firebase.auth().onAuthStateChanged((user) => {
    authStateChanged(user);
  });
}

export function addFood(food, addComplete) {
  food.createdAt = new Date();
  firebase
    .firestore()
    .collection("Foods")
    .add(food)
    .then((snapshot) => snapshot.get())
    .then((foodData) => addComplete(foodData.data()))
    .catch((error) => console.log(error));
}

export function updateFood(food, updateComplete) {
  food.updatedAt = new Date();
  firebase
    .firestore()
    .collection("Foods")
    .doc(food.id)
    .set(food)
    .then(() => updateComplete(food))
    .catch((error) => console.log(error));
}

export function deleteFood(food, deleteComplete) {
  console.log(food);
  firebase
    .firestore()
    .collection("Foods")
    .doc(food.id)
    .delete()
    .then(() => deleteComplete())
    .catch((error) => console.log(error));
}

export async function getFoods(foodsRetreieved) {
  var foodList = [];
  var snapshot = await firebase
    .firestore()
    .collection("Foods")
    .orderBy("createdAt")
    .get();

  snapshot.forEach((doc) => {
    const foodItem = doc.data();
    foodItem.id = doc.id;
    foodList.push(foodItem);
  });

  foodsRetreieved(foodList);
}
