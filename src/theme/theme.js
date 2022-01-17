import { extendTheme } from '@chakra-ui/react';
import breakpoints from './foundations/breakpoints';
import zIndices from './foundations/zIndices';
import colors from './foundations/colors';
import fonts from './foundations/fonts';
import Text from './components/Text';
import Flex from './components/Flex';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

// THEME
const theme = extendTheme({
  config,
  breakpoints,
  fonts,
  colors,
  zIndices,
  components: { Text, Flex },
});

export default theme;
