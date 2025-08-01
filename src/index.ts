// Import your main CSS file (this gets bundled automatically)
import './styles/index.css';

// Export your components - replace these with your actual component names
export { default as FormBuilderUIType } from './Pages/Admin/FormAttribute/Index';


// Add a default export to fix the import issue
import FormBuilderUIType from './Pages/Admin/FormAttribute/Index';
export default FormBuilderUIType;

// Export types if you have them
// export type { FormBuilderProps } from './types';

// Export everything as named exports too
export * from './Pages/Admin/FormAttribute/Index';
