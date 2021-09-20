import React from 'react';
import { Modal, Form, Input, Switch, Button, Space } from 'antd';
import { isEmpty } from 'lodash';
import { uuid } from 'uuidv4';

const { Item } = Form;
const { TextArea } = Input;

const ModalBookEdit = ({
  isModalVisible,
  handleClose,
  currentBook,
  editBook,
  isEditFetching,
  isRemoveFetching,
  removeBook,
}) => {
  return (
    <Modal
      title={isEmpty(currentBook) ? 'Adicionar livro' : 'Editar livro'}
      visible={isModalVisible}
      // onOk={handleOk}
      footer={null}
      onCancel={handleClose}
      destroyOnClose
    >
      <Form
        name="book-edit"
        initialValues={{ ...currentBook }}
        onFinish={values => {
          editBook(
            {
              ...values,
              id: currentBook && currentBook.id ? currentBook.id : uuid(),
            },
            () => handleClose()
          );
        }}
        layout="vertical"
        autoComplete="off"
      >
        <Item
          label="Nome do livro"
          name="name"
          rules={[
            {
              required: true,
              message: 'Este campo não pode ser vazio',
            },
          ]}
        >
          <Input />
        </Item>
        <Item
          label="Autor"
          name={['details', 'author']}
          rules={[
            {
              required: true,
              message: 'Este campo não pode ser vazio',
            },
          ]}
        >
          <Input />
        </Item>
        <Item
          label="Editora"
          name={['details', 'publisher']}
          rules={[
            {
              required: true,
              message: 'Este campo não pode ser vazio',
            },
          ]}
        >
          <Input />
        </Item>
        <Item
          label="Idioma"
          name={['details', 'language']}
          rules={[
            {
              required: true,
              message: 'Este campo não pode ser vazio',
            },
          ]}
        >
          <Input />
        </Item>
        <Item
          label="Ano de Publicação"
          name={['details', 'releaseYear']}
          rules={[
            {
              required: true,
              message: 'Este campo não pode ser vazio',
            },
          ]}
        >
          <Input />
        </Item>
        <Item
          label="Sinopse"
          name={['details', 'synopsis']}
          rules={[
            {
              required: true,
              message: 'Este campo não pode ser vazio',
            },
          ]}
        >
          <TextArea />
        </Item>
        <Item label="Alugado" name="rented">
          <Switch />
        </Item>
        <Space>
          <Button type="primary" loading={isEditFetching} htmlType="submit">
            Salvar
          </Button>
          <Button type="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button
            danger
            loading={isRemoveFetching}
            disabled={isEmpty(currentBook)}
            onClick={() => removeBook(currentBook.id, () => handleClose())}
          >
            Remover
          </Button>
        </Space>
      </Form>
    </Modal>
  );
};

export default ModalBookEdit;
