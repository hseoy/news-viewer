import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const categories = [
  'all',
  'business',
  'entertainment',
  'health',
  'science',
  'sports',
  'technology',
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  & + & {
    margin-left: 1rem;
  }

  &.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }
`;

const Categories = () => {
  const { t } = useTranslation();

  return (
    <CategoriesBlock>
      {categories.map(c => (
        <Category
          key={c}
          activeClassName="active"
          exact={c === 'all'}
          to={c === 'all' ? '/' : `/${c}`}
        >
          {t(c)}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
