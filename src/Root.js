import { useEffect, useState } from "react";
import App from "./App";
import { useIsAuthenticated } from "./hooks/useIsAuthenticated";
import useAuth from "./hooks/useAuth";
import { Toaster } from "sonner";

const Root = () => {
    const { setAuth } = useAuth();
    const [initializing, setInitializing] = useState(true);

    const { authenticated, isPending, error } = useIsAuthenticated();

    useEffect(() => {
        if (!isPending) {
            setAuth({ authenticated });
            setInitializing(false);
        }
    }, [isPending]);

    if(initializing) {
        return <div>Initializing...</div>
    }

    return (
        <>
        <Toaster position="top-right" />
        <App />
        </>
    );

};

export default Root;