import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./test.css";
import App from './AppTest'


const root = createRoot(document.getElementById("root"))
root.render(
    <StrictMode>
        <App/>
    </StrictMode>    

    )


    