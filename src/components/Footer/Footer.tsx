import { ButtonGroup, Box, IconButton, Stack, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Logo from '../../assets/logo.svg';

export const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    py={{ base: '12', md: '16' }}
    sx={{ backgroundColor: '#444347' }}>
    <Stack spacing={{ base: '4', md: '5' }}>
      <Stack justify="space-between" direction="row" align="center">
        <img src={Logo} />
        <ButtonGroup variant="tertiary">
          <IconButton as="a" href="#" aria-label="LinkedIn" icon={<FaLinkedin />} />
          <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub />} />
          <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" color="fg.subtle">
        &copy; {new Date().getFullYear()} Shortly App, Inc. All rights reserved.
      </Text>
    </Stack>
  </Box>
);
