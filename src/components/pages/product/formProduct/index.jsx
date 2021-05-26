import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  Section,
  Form,
  Close,
  Title,
  SubTitle,
  BoxField,
  LabelField,
  TextField,
  ButtonSubmit,
  Select,
} from './styles.js';
import { useCategoryData } from '@src/hooks/useCategoryData';
import { useBrandData } from '@src/hooks/useBrandData';
import { useForm } from 'react-hook-form';

export default ({ _handleCreate }) => {
  const { register, handleSubmit } = useForm();
  const { categories } = useCategoryData();
  const { brands } = useBrandData();
  const onSubmit = (d) => {
    alert(JSON.stringify(d));
  };

  return ReactDOM.createPortal(
    <Section>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Close onClick={_handleCreate}>x</Close>
        <Title>Registrar Producto</Title>
        <SubTitle>Ingrese los datos del producto</SubTitle>
        <BoxField>
          <LabelField>Nombre</LabelField>
          <TextField {...register('name')} />
        </BoxField>
        <BoxField>
          <LabelField>Tipo de producto</LabelField>
          <Select {...register('type')}>
            {categories.map((category) => (
              <option value={category.id}>{category.name}</option>
            ))}
          </Select>
        </BoxField>
        <BoxField>
          <LabelField>Marcas</LabelField>
          <Select {...register('brand')}>
            {brands.map((brand) => (
              <option value={brand.id}>{brand.name}</option>
            ))}
          </Select>
        </BoxField>
        <BoxField>
          <LabelField>Precio</LabelField>
          <TextField {...register('price')} />
        </BoxField>
        <BoxField>
          <LabelField>Description</LabelField>
          <textarea {...register('description')} />
        </BoxField>
        <BoxField>
          <LabelField>Stock</LabelField>
          <TextField {...register('stock')} />
        </BoxField>
        <ButtonSubmit>Enviar</ButtonSubmit>
      </Form>
    </Section>,
    document.getElementById('bar')
  );
};
