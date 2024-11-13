import React, { useEffect } from "react";
import { colors } from "@precooked/utils";

// Definimos la interface para los objetos dentro de "paths"
interface Path {
    d: string;
    color?: string; // La propiedad "color" es opcional
}

// Definimos la interface para las props del componente
interface DynamicIconProps {
    size?: number;  // El tamaño es opcional
    paths: Path[];  // "paths" es obligatorio y es un array de objetos que siguen la interface "Path"
    style?: React.CSSProperties; // Estilo opcional
}

const DynamicIcon: React.FC<DynamicIconProps> = ({ size = 24, paths, style }) => {

    useEffect(() => {
        // Aquí puedes añadir efectos colaterales si los necesitas
    }, []);

    const getColor = (pathColor?: string): string | undefined => {
        if (pathColor && pathColor in colors) {
            return colors[pathColor as keyof typeof colors]; // Aseguramos que pathColor es una clave válida
        }
        return pathColor; // Si no es una clave de colors, devolvemos el color original (puede ser un valor válido de CSS)
    };

    return (
        <svg
            style={{ ...style, width: size, height: size }}
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
        >
            {paths.map((path, index) => (
                <path
                    key={index}
                    fill={getColor(path.color) || colors.text}
                    d={path.d}
                />
            ))}
        </svg>
    );
};

export default DynamicIcon;
