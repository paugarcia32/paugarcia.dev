// components/Headings.tsx
import React from "react";

interface HeadingProps {
  children: React.ReactNode;
}

const styles = {
  h1: "text-3xl font-bold mb-4",
  h2: "text-2xl font-bold mt-7.5 mb-2.5 font-title",
  h3: "text-xl font-bold mb-2",
  h4: "text-lg font-semibold",
  // Añade más estilos según sea necesario
};

const Heading1: React.FC<HeadingProps> = ({ children }) => (
  <h1 className={styles.h1}>{children}</h1>
);

const Heading2: React.FC<HeadingProps> = ({ children }) => (
  <h2 className={styles.h2}>{children}</h2>
);

const Heading3: React.FC<HeadingProps> = ({ children }) => (
  <h3 className={styles.h3}>{children}</h3>
);

const Heading4: React.FC<HeadingProps> = ({ children }) => (
  <h3 className={styles.h4}>{children}</h3>
);

// Exporta los componentes
export { Heading1, Heading2, Heading3, Heading4 };
