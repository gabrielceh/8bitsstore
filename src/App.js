import AppRoutes from './routes/AppRoutes';
import { Button, useColorMode } from '@chakra-ui/react';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  const click = () => {
    toggleColorMode();
    console.log('click');
  };
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
