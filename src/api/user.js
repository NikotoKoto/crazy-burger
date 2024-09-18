import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu } from "../fakeData/fakeMenu";

export const getUser = async (idUser) => {
  const docRef = doc(db, "users", idUser);
  const docSnapshot = await getDoc(docRef);
  if(docSnapshot.exists()){
   const userReceived = docSnapshot.data()

    return userReceived
  }
};



export const addUser = (usernameId) => { 
    // Shelter
    const docRef = doc(db, "users", usernameId)

    //Food
    const nourriture = {
        username : usernameId,
        menu: fakeMenu.LARGE,
    }

    setDoc(docRef,nourriture)
 }