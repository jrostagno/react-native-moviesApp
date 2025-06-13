/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import useMovies from '../../hooks/useMovies';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PosterCarousel} from '../../components/movies/PosterCarousel';
import {HorizontalCarousel} from '../../components/movies/HorizontalCarousel';
import FullScreenLoader from '../../components/loaders/FullScreenLoader';

const HomeScreen = () => {
  const {
    nowPlaying,
    isLoading,
    popular,
    topRated,
    upcoming,
    setNextPagePopularMovie,
  } = useMovies();

  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 50}}>
        {/* principal */}
        <PosterCarousel movies={nowPlaying} />

        {/* horizontal */}

        <HorizontalCarousel
          movies={popular}
          loadNextPage={setNextPagePopularMovie}
          title="Populares"
        />

        {/* top rated */}

        <HorizontalCarousel movies={topRated} title="Mejor calificadas" />

        {/* horizontal */}

        <HorizontalCarousel movies={upcoming} title="Up comming" />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
