// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import "./styles/App.css";
import App from "./App.tsx";
import '@syncfusion/ej2-base/styles/material.css'; 
import '@syncfusion/ej2-react-grids/styles/material.css'; 
import { registerLicense } from "@syncfusion/ej2-base";
registerLicense("ORg4AjUWIQA/Gnt2XFhhQlJHfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hTH5XdkdhWn1XdHVURWhYWkZ/");

createRoot(document.getElementById("root")!).render(
  <>
    
      <App />

  </>
);
