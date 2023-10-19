import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'

  import React from 'react'
  
  const Breadcrumbb = ({a,b,c,link1,link2,link3}) => {
    return (
        <Breadcrumb w={'80%'} color={'grey'}  margin={' 50px auto'}>
        <BreadcrumbItem>
          <BreadcrumbLink href={link1}>{a}</BreadcrumbLink>
        </BreadcrumbItem>
      
        <BreadcrumbItem>
          <BreadcrumbLink href={link2}>{b}</BreadcrumbLink>
        </BreadcrumbItem>
      
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href={link3}>{c}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    )
  }
  
  export default Breadcrumbb