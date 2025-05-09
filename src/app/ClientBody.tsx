"user client"

import { useEffect } from "react";

export default function ClientBody({ children }: { children: React.ReactNode }) { 
    useEffect(() => { 
        document.body.classList.add("antialiased");

        return () => {
            document.body.classList.remove("antialiased");
        };
    }, []);

    return <div className="antiliased">{children}</div>;

    
}