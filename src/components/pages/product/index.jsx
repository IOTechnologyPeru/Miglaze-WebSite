import React, { useState } from 'react';
import {
  Section,
  BoxTitle,
  Title,
  ButtonNuevo,
  BoxSearch,
  InputSearch,
  ButtonSearch,
  Table,
  Tr,
  Trx,
  Th,
} from './styles';
import FormProduct from './formProduct';
import { useProductData } from '@src/hooks/useProductData';
import { useCategoryData } from '@src/hooks/useCategoryData';
import { useBrandData } from '@src/hooks/useBrandData';

export default () => {
  const [isCreate, setCreate] = useState(false);
  const { products = [] } = useProductData();
  const { categories = [] } = useCategoryData();
  const { brands = [] } = useBrandData();

  const handleCreate = () => {
    setCreate(!isCreate);
  };

  return (
    <>
      <Section>
        <BoxTitle>
          <Title>Productos</Title>
          <ButtonNuevo onClick={handleCreate}>Nuevo</ButtonNuevo>
        </BoxTitle>

        <BoxSearch>
          <InputSearch type='text' placeholder='Buscar...' />
          <ButtonSearch>Buscar</ButtonSearch>
        </BoxSearch>
        <Table>
          <thead>
            <Tr>
              <Th scope='col'>#</Th>
              <Th scope='col'>Nombre</Th>
              <Th scope='col'>Marca</Th>
              <Th scope='col'>Categoria</Th>
              <Th scope='col'>Precio</Th>
              <Th scope='col'>Stock</Th>
              <Th></Th>
            </Tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <Trx key={product.id}>
                <Th scope='row'>{product.id}</Th>
                <Th>{product.name}</Th>
                <Th>{brands[product.product_brand_id - 1]?.name}</Th>
                <Th>{categories[product.kind_product_id - 1]?.name}</Th>
                <Th>S/.{product.unit_price}</Th>
                <Th>{product.stock}</Th>
                <Th></Th>
              </Trx>
            ))}
          </tbody>
        </Table>
      </Section>
      {isCreate && <FormProduct _handleCreate={handleCreate} />}
    </>
  );
};
