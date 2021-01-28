import { Box, Text, HStack, VStack, Avatar } from '@chakra-ui/react'

export function Quote({
  quote, 
  logoUrl,
  speakerName, 
}) {
  return (
    <VStack 
      padding={4}
      spacing={4}
      alignItems='flex-start'
      borderRadius='md'
      justifyContent='space-between'
      backgroundColor='white' 
    >
       <Text as="cite">{quote}</Text>

       <HStack spacing={3} alignItems='center'>
        <Avatar src={logoUrl} />
        <Box>
          <Text fontWeight="bold">
            {speakerName}
          </Text>
        </Box>
      </HStack>
    </VStack>
  )
}