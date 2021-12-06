import Head from 'next/head'
import Image from 'next/image'
import NextLink from 'next/link'
import Main from '../components/layouts/main'
import ThemeToggleButton from '../components/theme-toggle-button'
import {
  Box,
  Text,
  Heading
} from '@chakra-ui/react'

export default function Home() {
  return (
    <Main title="index page">
      {/* <ThemeToggleButton />
      <Text as="span"> theme toggle button</Text> */}
    </Main>
  )
}
