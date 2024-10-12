import { render, screen } from '@testing-library/react';
import App from './App';

test('renders About Me, Projects, and Contact sections', () => {
  render(<App />);

   // Check if the "About Me" heading is in the document
   const aboutElement = screen.getByText(/About Me/i);
   expect(aboutElement).toBeInTheDocument();
   
   // Check if the "Projects" heading is specifically in the document
   const projectsElement = screen.getByRole('heading', { name: /Projects/i });
   expect(projectsElement).toBeInTheDocument();
   
   // Check if the "Contact" heading is in the document
   const contactElement = screen.getByRole('heading', { name: /Contact/i });
   expect(contactElement).toBeInTheDocument();
});
