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



export const addUser = (userId) => { 
    // Shelter
    const docRef = doc(db, "users", userId)

    //Food
    const nourriture = {
        username : userId,
        menu: fakeMenu.LARGE,
    }

    setDoc(docRef,nourriture)
 }

 export const authenticateUser = async (userId) => { 
    const existingUser = await getUser(userId);
    if(!existingUser){
     addUser(userId)}
     return existingUser
  }