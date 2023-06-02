import { createContext, useMemo, useState } from 'react';

export const MenuContext = createContext();

function MenuProvider({ children }) {
  const [showMenu, setShowMenu] = useState(false);

  const values = useMemo(() => ({
    showMenu,
    setShowMenu,
  }), [showMenu]);

  return (
    <MenuContext.Provider value={ values }>
      {children}
    </MenuContext.Provider>
  );
}

MenuProvider.propTypes = {}.isrequired;

export default MenuProvider;
