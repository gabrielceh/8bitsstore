import React from 'react';
import ButtonPagination, { ButtonNextPrev } from './ButtonPagination';
import SpinnerComponent from '../Spinner/SpinnerComponent';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { Tooltip } from '@chakra-ui/react';

const Pagination = ({ page, setPage, maxPage, loading }) => {
  const generatePaginationActionButtons = () => {
    let focus = [false, true, false];
    let indexes = [page - 1, page, page + 1];

    if (page === 1) {
      indexes = [1, 2, 3];
      focus = [true, false, false];
    }

    if (page === maxPage) {
      indexes = [maxPage - 2, maxPage - 1, maxPage];
      focus = [false, false, true];
    }

    if (page === maxPage && maxPage === 1) {
      indexes = [maxPage];
      focus = [true];
    }

    if (maxPage === 2) {
      focus = [true, false];
      indexes = [page, page + 1];
    }

    if (maxPage === 2 && page === maxPage) {
      focus = [false, true];
      indexes = [page - 1, page];
    }

    const buttons = [0, 1, 2].map((i) =>
      indexes[i] ? (
        <ButtonPagination key={`pmb-${i}`} isFocused={focus[i]} onClick={() => setPage(indexes[i])}>
          {indexes[i]}
        </ButtonPagination>
      ) : null
    );
    return buttons;
  };

  const renderPaginationAction = () => {
    const [first, second, third] = generatePaginationActionButtons();

    return (
      <div
        style={{
          marginTop: '1rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Tooltip label="Ir a la primera página">
          <span>
            <ButtonNextPrev onClick={() => setPage(1)} as={MdKeyboardArrowLeft} />
          </span>
        </Tooltip>
        <div>
          {first} {second} {third}
        </div>
        <Tooltip label="Ir a la última página">
          <span>
            <ButtonNextPrev onClick={() => setPage(maxPage)} as={MdKeyboardArrowRight} />
          </span>
        </Tooltip>
      </div>
    );
  };

  return (
    <>
      {loading && <SpinnerComponent />}
      {loading || <div>{renderPaginationAction()}</div>}
    </>
  );
};

export default Pagination;
