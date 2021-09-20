import React, { useState } from 'react';
import styled from 'styled-components';
import { Table, Tag, Button, Input, Space } from 'antd';
import {
  DownCircleFilled,
  FieldTimeOutlined,
  SearchOutlined,
  UpCircleFilled,
} from '@ant-design/icons';

import bg from '../../images/endless-constellation.svg';
import PageLayout from '../../components/PageLayout';
import PageBackground from '../../components/PageBackground';
import data from '../../mock/books.json';

const BookList = ({ name }) => {
  const [expandedKeys, setExpandedKeys] = useState([]);

  const columns = [
    {
      title: 'Nome do Livro',
      dataIndex: 'name',
      key: 'name',
      filterIcon: filtered => (
        <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
      ),
      onFilter: (value, record) =>
        record.name
          ? record.name.toString().toLowerCase().includes(value.toLowerCase())
          : '',
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        console.log(selectedKeys);
        return (
          <SearchBox>
            <Input
              placeholder="Nome do Livro"
              value={selectedKeys[0]}
              onChange={e =>
                setSelectedKeys(e.target.value ? [e.target.value] : [])
              }
            />
            <StyleSpace>
              <Button
                type="primary"
                onClick={() => confirm()}
                icon={<SearchOutlined />}
                size="small"
              >
                Buscar
              </Button>
              <Button onClick={() => clearFilters()} size="small">
                Limpar
              </Button>
            </StyleSpace>
          </SearchBox>
        );
      },
    },
    {
      title: 'Autor',
      key: 'author',
      render: (_, record) => {
        return <>{record.details.author}</>;
      },
    },
    {
      title: 'Editora',
      key: 'publisher',
      render: (_, record) => {
        return <>{record.details.publisher}</>;
      },
    },
    {
      title: 'Situação',
      dataIndex: 'rented',
      align: 'center',
      key: 'rented',
      render: rented => {
        const color = rented ? 'red' : 'blue';
        return (
          <StyledTag color={color}>
            {rented ? 'Indisponível' : 'Disponível'}
          </StyledTag>
        );
      },
    },
    {
      title: 'Alugar',
      dataIndex: 'rented',
      key: 'rent',
      render: rented => {
        return (
          <Button
            type="primary"
            shape="round"
            icon={<FieldTimeOutlined />}
            disabled={rented}
          />
        );
      },
    },
  ];

  return (
    <PageBackground background={bg}>
      <PageLayout>
        <Wrapper>
          <Title>Olá, {name}</Title>
          <SubTitle>Confira nossos livros disponíveis para aluguel</SubTitle>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            rowKey={record => record.id}
            expandable={{
              expandedRowKeys: expandedKeys,
              onExpand: (expanded, record) => {
                return expanded
                  ? setExpandedKeys([record.id])
                  : setExpandedKeys([]);
              },
              expandedRowRender: record => (
                <ExpandedContainer>
                  <Bold>Idioma: </Bold>
                  {record.details.language}
                  <br />
                  <br />
                  <Bold>Ano de Publicação: </Bold>
                  {record.details.releaseYear}
                  <br />
                  <br />
                  <Bold>
                    Sinopse:
                    <br />
                    <Italic>{record.details.synopsis}</Italic>
                  </Bold>
                </ExpandedContainer>
              ),
              expandIcon: ({ expanded, onExpand, record }) =>
                expanded ? (
                  <UpCircleFilled onClick={e => onExpand(record, e)} />
                ) : (
                  <DownCircleFilled onClick={e => onExpand(record, e)} />
                ),
            }}
          />
        </Wrapper>
      </PageLayout>
    </PageBackground>
  );
};

const Wrapper = styled.div`
  padding: 30px 20px 70px;
  margin-top: 50px;
  background: #f1f1f1;
  height: fit-content;
  border: 4px solid gray;
  width: 100%;
`;

const SearchBox = styled.div`
  padding: 20px;
`;

const StyleSpace = styled(Space)`
  margin-top: 10px;
`;

const StyledTag = styled(Tag)`
  width: 100%;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 500;
`;

const SubTitle = styled.div`
  font-size: 18px;
  margin-bottom: 30px;
`;

const ExpandedContainer = styled.div`
  padding: 16px 20px 16px 47px;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const Italic = styled.div`
  font-style: italic;
  font-weight: normal;
`;

export default BookList;
