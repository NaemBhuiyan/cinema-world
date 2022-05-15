// import useURLQuery from '@/lib/hooks/useURLQuery';
import React from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const { id } = useParams();
  return <div>{id}</div>;
}

export default MovieDetails;
