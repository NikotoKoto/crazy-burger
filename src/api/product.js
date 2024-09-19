import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"
export const syncBotMenus = (userId, menuUpdated) => {
    const shelter = doc(db, "users", userId)

    const food = {
        username : userId,
        menu: menuUpdated
    }

    setDoc(shelter, food , { merge: true })
 }



 export const getMenu = async (userId) => {


        //const docRef = doc(chemin Bdd)
        const docRef = doc(db, "users", userId);
        const docSnapshot = await getDoc(docRef);
    
        // Vérifier si l'utilisateur existe dans Firestore
        if (docSnapshot.exists()) {
          const {menu}= docSnapshot.data();
          return menu;
        } 
          // Retourner null si l'utilisateur n'est pas trouvé
          return null;
        
      
    };
    