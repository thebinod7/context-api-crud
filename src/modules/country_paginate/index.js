import React, { useState, useEffect, useCallback } from 'react';
import Countries from 'countries-api/lib/data/Countries.json';

import Paginate from '../global/Paginate';
import CountryCard from '../country_paginate/countryCard';

export default function Index() {
  const [allCountries, setAllCountries] = useState([]);
  const [currentCountries, setCurrentCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(null);
  const [totalPages, setTotalPages] = useState(null);

  const totalCountries = allCountries.length;

  const onPageChanged = useCallback(
    (paginationData) => {
      const { currentPage, totalPages, pageLimit } = paginationData;

      const offset = (currentPage - 1) * pageLimit;
      const currentCountries = allCountries.slice(offset, offset + pageLimit);

      setCurrentPage(currentPage);
      setCurrentCountries(currentCountries);
      setTotalPages(totalPages);
    },
    [allCountries]
  );

  useEffect(() => {
    setAllCountries(Countries);
  }, []);

  const headerClass = [
    'text-dark py-2 pr-4 m-0',
    currentPage ? 'border-gray border-right' : '',
  ]
    .join(' ')
    .trim();

  if (totalCountries === 0) return null;

  return (
    <div>
      <div className="container mb-5">
        <div className="row d-flex flex-row py-5">
          <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <h2 className={headerClass}>
                <strong className="text-secondary">{totalCountries}</strong>{' '}
                Countries
              </h2>
              {currentPage && (
                <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                  Page <span className="font-weight-bold">{currentPage}</span> /{' '}
                  <span className="font-weight-bold">{totalPages}</span>
                </span>
              )}
            </div>
            <div className="d-flex flex-row py-4 align-items-center">
              <Paginate
                totalRecords={totalCountries}
                pageLimit={18}
                pageNeighbours={1}
                onPageChanged={onPageChanged}
              />
            </div>
          </div>
          {currentCountries.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </div>
      </div>
    </div>
  );
}
