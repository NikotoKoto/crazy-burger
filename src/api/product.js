import { doc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"
export const syncBotMenus = (userId, menuUpdated) => {
    const shelter = doc(db, "users", userId)

    const food = {
        username : userId,
        menu: menuUpdated
    }

    setDoc(shelter, food , { merge: true })
 }