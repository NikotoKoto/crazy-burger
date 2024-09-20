import { getMenu } from "../../../../api/product";
import { getLocalStorage } from "../../../../utils/window";

export const initialiseUserSession = async (setMenu, setBasket, username) => {
  const initialiseMenu = async () => {
    const menuReceived = await getMenu(username);
    setMenu(menuReceived);
  };

  const initialiseBasket = () => {
    const basketReceived = getLocalStorage(username); // localSotrage est synchrone pas besoin de "await"
    if (basketReceived) setBasket(basketReceived);
  };

  await initialiseMenu();
  initialiseBasket();
};
