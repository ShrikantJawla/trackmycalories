import React, { useState } from 'react'
import {
  Button,
  CloseButton,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { addNewProduct } from '../../../../redux/admin/admin.actions'

const AddNewProductAdmin = ({ isVisible, toggleVisiblity }) => {
  const dispatch = useDispatch()
  const toast = useToast()
  const [newProductDetails, setNewProductDetails] = useState({
    name: '',
    image: '',
    quantity: 1,
    totalPrice: '',
    discountPercentage: '',
    afterDiscountPrice: '',
    category: '',
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setNewProductDetails({ ...newProductDetails, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      newProductDetails.name === '' ||
      newProductDetails.image === '' ||
      newProductDetails.totalPrice === '' ||
      newProductDetails.afterDiscountPrice === '' ||
      newProductDetails.category === '' ||
      newProductDetails.discountPercentage === ''
    ) {
      return toast({
        position: 'top',
        title: 'Input feild Error!',
        description: 'Please fill all the fields to proceed!',
        status: 'warning',
        duration: 4000,
        isClosable: true,
      })
    }
    dispatch(addNewProduct(newProductDetails))
    toast({
      position: 'top',
      title: 'Product added!',
      description: 'New Product has been added successfully',
      status: 'success',
      duration: 4000,
      isClosable: true,
    })
    toggleVisiblity()
  }
  if (isVisible)
    return (
      <VStack
        as="form"
        w={{ base: 'full', md: '500px' }}
        boxShadow="var(--boxShadow)"
        position="fixed"
        bg="white"
        top="10%"
        left={{ base: '0', md: '17%', lg: '38%' }}
        px="19px"
        py="20px"
        onSubmit={handleSubmit}
      >
        <HStack w="full" justifyContent="flex-end" px="25px">
          <CloseButton fontSize={19} onClick={toggleVisiblity} />
        </HStack>
        <Text w="full" textAlign="center" fontSize={19} fontWeight={600}>
          Add a new Product
        </Text>
        <Divider />
        <FormControl>
          <FormLabel>Name of Product</FormLabel>
          <Input
            name="name"
            value={newProductDetails.name}
            onChange={handleChange}
          />
        </FormControl>
        <HStack w="full">
          <FormControl w="60%">
            <FormLabel>Image url of Product</FormLabel>
            <Input
              name="image"
              type="url"
              value={newProductDetails.image}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl w="40%">
            <FormLabel>Category of Product</FormLabel>
            <Input
              name="category"
              value={newProductDetails.category}
              onChange={handleChange}
            />
          </FormControl>
        </HStack>

        <HStack w="full" justify="space-between">
          <FormControl>
            <FormLabel>Total price of Product</FormLabel>
            <Input
              name="totalPrice"
              type="number"
              value={newProductDetails.totalPrice}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>discount percentage</FormLabel>
            <Input
              name="discountPercentage"
              type="number"
              value={newProductDetails.discountPercentage}
              onChange={handleChange}
            />
          </FormControl>
        </HStack>
        <HStack w="full" justify="space-between">
          <FormControl>
            <FormLabel>Price after discount</FormLabel>
            <Input
              name="afterDiscountPrice"
              type="number"
              value={newProductDetails.afterDiscountPrice}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Quantity of Product</FormLabel>
            <Input
              name="quantity"
              type="number"
              value={newProductDetails.quantity}
              onChange={handleChange}
            />
          </FormControl>
        </HStack>
        <Button
          type="submit"
          style={{ marginTop: '20px' }}
          w="50%"
          variant="solid"
          colorScheme="cyan"
        >
          Add Product
        </Button>
      </VStack>
    )
}

export default AddNewProductAdmin
