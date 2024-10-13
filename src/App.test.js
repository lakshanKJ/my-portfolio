import { render, screen } from '@testing-library/react';
import App from './App';

test('renders About Me, Projects, and Contact sections', () => {
  render(<App />);

   // Check if the "About Me" heading is in the document
   const aboutElement = screen.getByRole('heading', {name: /About Me/i, level: 2});
   expect(aboutElement).toBeInTheDocument();
   
   // Check if the "Projects" heading is specifically in the document
   const projectsElement = screen.getByRole('heading', { name: /Projects/i, level: 2 });
   expect(projectsElement).toBeInTheDocument();
   
   // Check if the "Contact" heading is in the document
   const contactElement = screen.getByRole('heading', { name: /Contact/i, level: 2 });
   expect(contactElement).toBeInTheDocument();
});
