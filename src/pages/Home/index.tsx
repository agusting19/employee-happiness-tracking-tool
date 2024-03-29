import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPeople } from '@/redux/states';
import { People } from '@/data';
import { PeopleTable } from './components';

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPeople(People));
  }, []);

  return (
    <PeopleTable />
  );
};

export default Home;
