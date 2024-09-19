import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu } from "../fakeData/fakeMenu";
import bcrypt from 'bcryptjs'



export const getUser = async (idUser) => {
  try {
    const docRef = doc(db, "users", idUser);
    const docSnapshot = await getDoc(docRef);

    // Vérifier si l'utilisateur existe dans Firestore
    if (docSnapshot.exists()) {
      const userReceived = docSnapshot.data();
      return userReceived;
    } 
      // Retourner null si l'utilisateur n'est pas trouvé
      
    
  } catch (error) {
    // Gestion des erreurs liées à Firestore (optionnel)
    console.error("Erreur lors de la récupération de l'utilisateur :", error);
    return null;
  }
};



    export const addUser = async (userId, password) => { 
      const hashedPassword = await bcrypt.hash(password, 10); // Hacher le mot de passe
      //Shelter
      const docRef = doc(db, "users", userId);
    
      //Feed
      const feedData = {
        username: userId,
        password: hashedPassword, // Assurez-vous d'utiliser le bon champ
        menu: fakeMenu.LARGE,
      };
    
      await setDoc(docRef, feedData);
    };
 

 export const authenticateUser = async (userId, password) => {
  // Récupérer l'utilisateur depuis Firestore
  const existingUser = await getUser(userId);

    if (!existingUser) {
         addUser(userId,password);
    }

    // Comparer le mot de passe haché
    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) {
       alert("Mot de passe incorrect");
       return null;
    }

    return existingUser;
};