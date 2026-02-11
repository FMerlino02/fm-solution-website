import React from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import './utils/theme';

export default function App() {
  return <RouterProvider router={router} />;
}