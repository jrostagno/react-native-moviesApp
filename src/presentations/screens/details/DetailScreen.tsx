import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {RootStackParams} from '../../navigation/Navigation';
import {useMovie} from '../../hooks/useMovie';
import {MovieHeader} from '../../components/movie/MovieHeader';
import {MovieDetail} from '../../components/movie/MovieDetail';
import {ScrollView} from 'react-native-gesture-handler';
import FullScreenLoader from '../../components/loaders/FullScreenLoader';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

const DetailScreen = ({route}: Props) => {
  const {movieId} = route.params;

  const {isLoading, movie, castMovie} = useMovie(movieId);
  // const {movieId} = useRoute().params;
  if (isLoading) {
    return <FullScreenLoader />;
  }
  console.log(castMovie);

  return (
    <ScrollView>
      <MovieHeader movie={movie!} />
      <MovieDetail movie={movie!} cast={castMovie} />
    </ScrollView>
  );
};

export default DetailScreen;
