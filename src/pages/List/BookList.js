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

const BookList = ({ name, bookList, rentBook, isRentFetching }) => {
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
      responsive: ['sm'],
      render: (_, record) => {
        return <>{record.details.author}</>;
      },
    },
    {
      title: 'Editora',
      key: 'publisher',
      responsive: ['sm'],
      render: (_, record) => {
        return <>{record.details.publisher}</>;
      },
    },
    {
      title: 'Situa????o',
      dataIndex: 'rented',
      align: 'center',
      key: 'rented',
      responsive: ['sm'],
      render: rented => {
        const color = rented ? 'red' : 'blue';
        return (
          <StyledTag color={color}>
            {rented ? 'Indispon??vel' : 'Dispon??vel'}
          </StyledTag>
        );
      },
    },
    {
      title: 'Alugar',
      dataIndex: 'rented',
      key: 'rent',
      render: (_, record) => {
        return (
          <Button
            type="primary"
            shape="round"
            icon={<FieldTimeOutlined />}
            loading={isRentFetching}
            disabled={record.rented}
            onClick={e => rentBook(record.id)}
          />
        );
      },
    },
  ];

  return (
    <PageBackground background={bg}>
      <PageLayout>
        <Wrapper>
          <Title>Ol??, {name}</Title>
          <SubTitle>Confira nossos livros dispon??veis para aluguel</SubTitle>
          <Table
            columns={columns}
            dataSource={bookList}
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
                  <MobileDetails>
                    <Bold>Autor: </Bold>
                    {record.details.author}
                    <br />
                    <br />
                    <Bold>Editora: </Bold>
                    {record.details.publisher}
                    <br />
                    <br />
                  </MobileDetails>
                  <Bold>Idioma: </Bold>
                  {record.details.language}
                  <br />
                  <br />
                  <Bold>Ano de Publica????o: </Bold>
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

const MobileDetails = styled.span`
  @media (min-width: 576px) {
    display: none;
  }
`;

const Bold = styled.span`
  font-weight: bold;
`;

const Italic = styled.div`
  font-style: italic;
  font-weight: normal;
`;

export default BookList;
