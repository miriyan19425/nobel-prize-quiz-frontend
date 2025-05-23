import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import NewQuizEntry from './pages/NewQuizEntry';
import Physics from './pages/Physics';
import Chemistry from './pages/Chemistry';
import Medicine from './pages/Medicine';
import Literature from './pages/Literature';
import Peace from './pages/Peace';
import Economics from './pages/Economics';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/new',
    element: <NewQuizEntry />,
  },
  {
    path: '/physics',
    element: <Physics />,
  },
  {
	  path: '/chemistry',
    element: <Chemistry />,  
  },
  {
	  path: '/medicine',
    element: <Medicine />,  
  },
  {
	  path: '/literature',
    element: <Literature />,  
  },
  {
	  path: '/peace',
    element: <Peace />,  
  },
  {
	  path: '/economics',
    element: <Economics />,  
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
