import { Stack, useBreakpointValue, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DisplayAllProductsAdmin from '../../../components/shop/adminSection/admin-products/DisplayAllProductsAdmin'
import DashboardSidebar from '../../../components/shop/adminSection/DashboardSidebar'
import NavbarAdmin from '../../../components/shop/adminSection/NavbarAdmin'
import Pagination from '../../../components/shop/categoryDisplay/Pagination'
import { getFilteredShopProducts } from '../../../redux/admin/admin.actions'

const AdminProducts = () => {
  const [page, setPage] = useState(1)
  const [productsToDisplay, setProductsToDisplay] = useState([])
  const dispatch = useDispatch()
  const { ordersDetails, filteredProducts } = useSelector((s) => s.admin)
  const changePage = (newPage) => setPage(newPage)
  const margin = useBreakpointValue(
    {
      base: 'auto',
      lg: '15%',
    },
    {
      fallback: 'md',
    },
  )

  useEffect(() => {
    dispatch(getFilteredShopProducts())
    if (filteredProducts) {
      setProductsToDisplay(filteredProducts)
    }
  }, [])

  useEffect(() => {
    dispatch(getFilteredShopProducts('', page))
  }, [page])

  return (
    <>
      <NavbarAdmin />
      <DashboardSidebar location="adminProducts" />
      <VStack
        direction={{ base: 'column', md: 'row' }}
        style={{ marginLeft: margin }}
        w={{ base: 'full', lg: '85%' }}
        p={{ base: 'auto', lg: '15px' }}
      >
        <DisplayAllProductsAdmin filteredProducts={filteredProducts} />
        <Pagination pageNumber={page} changePage={changePage} />
      </VStack>
    </>
  )
}

export default AdminProducts
