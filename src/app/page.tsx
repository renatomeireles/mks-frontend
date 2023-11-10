"use client"
import { useState, useEffect, useCallback } from 'react'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import { Skeleton, CircularProgress, Box, Stack } from '@mui/material'
import Container from '@/components/Container'
import Content from '@/components/Content'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ProductCard from '@/components/ProductCard'
import GlobalStyle from '@/styles/global'
import apiProducts from '@/service/api'
import { IProduct, IProductCart } from '@/interfaces/IProduct'


export default function Home() {

  const [products, setProducts] = useState<IProduct[]>([])
  const [itemCart, setItemCart] = useState<IProductCart[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const [isVisible, setIsVisible] = useState<boolean>(false)

  const getProducts = useCallback(async () => {
    const response = await apiProducts()
    setProducts(response)
    setLoading(false)
  }, [])

  useEffect(() => {
    getProducts()
  }, [getProducts])

  return (
    <>
      <Provider store={store}>
        {loading ? (

          <Stack spacing={10} width="100%" >
            <Skeleton variant="rectangular" width="100vw" height={101} />
            <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
              <Stack spacing={2} direction="row" useFlexGap flexWrap="wrap" justifyContent="center" width={1000}>
                {Array.from({ length: 8 }).map((_, index) => (
                  <Stack key={index} width={218}>
                    <Skeleton variant="rounded" width={218} height={200} />
                    <Skeleton variant="text" width={218} height={30} />
                    <Skeleton variant='text' width={218} height={30} />
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Stack>


        ) : (
          <Container>
            <Header setIsVisible={setIsVisible} quantityProducts={itemCart.length} />
            <Content>
              {products.map((product: any) => (
                <ProductCard key={product.id} 
                name={product.name} 
                price={product.price} 
                description={product.description} 
                photo={product.photo} id={product.id} 
                brand={''} />
              ))}
            </Content>
            <Footer />
            <GlobalStyle />
          </Container>
        )}

      </Provider>
    </>
  )
}
