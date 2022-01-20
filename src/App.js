import AppRoutes from './routes/AppRoutes';
// import { Button, useColorMode } from '@chakra-ui/react';
import { FavoriteProvider } from './context/FavoriteContext';

function App() {
  // const { colorMode, toggleColorMode } = useColorMode();

  // const click = () => {
  //   toggleColorMode();
  //   console.log('click');
  // };
  return (
    <>
      <FavoriteProvider>
        <AppRoutes />
      </FavoriteProvider>
    </>
  );
}

export default App;
