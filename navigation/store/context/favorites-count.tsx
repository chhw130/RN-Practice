import { ReactDOM, ReactNode, createContext } from "react";

interface FavoritesContextType {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

export const FavoritesContext = createContext<FavoritesContextType | null>({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <FavoritesContext.Provider value={null}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
