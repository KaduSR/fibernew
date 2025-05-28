// components/DropdownMenu/DropdownMenu.tsx
import React, { useState, useRef, useEffect, ReactNode } from "react";
import styles from "./DropdownMenu.module.css";

interface DropdownMenuProps {
  /**
   * O elemento que irá disparar a abertura do dropdown (ex: um botão, um link, etc.).
   */
  trigger: ReactNode;
  /**
   * O conteúdo a ser exibido dentro do dropdown quando aberto.
   */
  children: ReactNode;
  /**
   * Posição do dropdown em relação ao trigger. Pode ser 'left', 'right' ou 'center'.
   * @default 'left'
   */
  position?: "left" | "right" | "center";
  /**
   * Classe CSS adicional para o container do dropdown.
   */
  className?: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  trigger,
  children,
  position = "left",
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  // Hook para fechar o dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getMenuPositionClass = () => {
    switch (position) {
      case "right":
        return styles.positionRight;
      case "center":
        return styles.positionCenter;
      case "left":
      default:
        return styles.positionLeft;
    }
  };

  return (
    <div className={`${styles.dropdownContainer} ${className || ""}`}>
      <div
        ref={triggerRef}
        onClick={toggleDropdown}
        className={styles.dropdownTrigger}
      >
        {trigger}
      </div>
      {isOpen && (
        <div
          ref={dropdownRef}
          className={`${styles.dropdownMenu} ${getMenuPositionClass()}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
