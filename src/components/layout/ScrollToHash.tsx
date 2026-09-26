import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * react-router no hace scroll nativo a anclas (#servicios, #nosotros, etc.)
 * como lo hace un <a href> normal. Este componente replica ese
 * comportamiento cuando cambia el hash de la URL.
 */
export function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }

    const id = hash.replace("#", "");
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash, pathname]);

  return null;
}
