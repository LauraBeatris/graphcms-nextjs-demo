import { Text, HStack, Avatar } from '@chakra-ui/react'

export function Customer({
  logoUrl,
  customerName, 
}) {
  return (
    <HStack 
      padding={4}
      spacing={4}
      alignItems='center'
      borderRadius='md'
      backgroundColor='white' 
    >
      <Avatar src={logoUrl} />
      <Text fontWeight="bold">
        {customerName}
      </Text>
    </HStack>
  )
}