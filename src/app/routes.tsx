import { createBrowserRouter } from 'react-router';
import { Layout } from './pages/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { AIIntegration } from './pages/AIIntegration';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Support } from './pages/Support';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'services', Component: Services },
      { path: 'ai-integration', Component: AIIntegration },
      { path: 'about', Component: About },
      { path: 'contact', Component: Contact },
      { path: 'support', Component: Support },
      { path: 'privacy', Component: Privacy },
      { path: 'terms', Component: Terms },
      { path: '*', Component: NotFound },
    ],
  },
]);