import React from 'react';
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { LinkCommon } from '../../styled/links.styled';

const BreadcrumbComponent = ({ data = [] }) => {
  // console.log(data);
  return (
    <Box bg={'yellowPrincipal.dark'} color={'white'} padding={{ base: '0 1rem', md: '0' }}>
      <Breadcrumb
        w={{ base: '100%', md: '90%', '2xl': '1536px' }}
        margin={'0 auto'}
        separator={<MdKeyboardArrowRight />}
      >
        {data.map((item, i) =>
          i === data.length - 1 ? (
            <BreadcrumbItem key={item.id}>
              <Text fontSize={'10px'} color={'yellowPrincipal.light'}>
                {item.label.toUpperCase()}
              </Text>
            </BreadcrumbItem>
          ) : item.label === 'details' ? (
            <BreadcrumbItem key={item.id}>
              <Text fontSize={'10px'} color={'yellowPrincipal.light'}>
                {item.label.toUpperCase()}
              </Text>
            </BreadcrumbItem>
          ) : (
            <BreadcrumbItem key={item.id}>
              <BreadcrumbLink as={LinkCommon} to={item.path}>
                <Text fontSize={'10px'}>{item.label.toUpperCase()}</Text>
              </BreadcrumbLink>
            </BreadcrumbItem>
          )
        )}
      </Breadcrumb>
    </Box>
  );
};

export default BreadcrumbComponent;
