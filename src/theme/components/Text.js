const Text = {
  variants: {
    instagram: {
      bgGradient: 'linear(to-l, #7928CA, #FF0080)',
      bgClip: 'text',
      fontWeight: '700',
      _hover: {
        bgGradient:
          'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)',
      },
    },
    facebook: {
      bgGradient: 'linear-gradient(120deg, #17ABFC, #0064E0)',
      bgClip: 'text',
      fontWeight: '700',
      _hover: {
        bgGradient: 'linear-gradient(120deg, #0064E0, #17ABFC)',
      },
    },
    twitter: {
      color: '#1DA1F2',
      fontWeight: '700',
      _hover: {
        bgGradient: 'linear-gradient(120deg, #1DA1F2, #15212A)',
        bgClip: 'text',
      },
    },
  },
};

export default Text;
