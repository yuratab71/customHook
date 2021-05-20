import { useState, useEffect } from "react";

export default function useLayout(){
    const [columns, setColumns] = useState(6);
    function calculateColumns(width){
        if (width >= 1440 ){
            return 6;
        } 
        if (width < 1440 && width >= 992) {
            return 4;
        }
        if (width < 992 && width >= 768) {
            return 3;
        } else {
            return 1;
        }
    }
    useEffect(() => {
        function widthHandler(){
            setColumns(calculateColumns(window.screen.width));
        }
        window.addEventListener("resize", widthHandler);
        widthHandler();

        return () => window.removeEventListener("resize", widthHandler);
    }, []);
    return columns;
}