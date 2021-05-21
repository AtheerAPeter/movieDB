import {View, Text, FlatList, Animated} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import Styles from './Style';
import Tab from './Tab';
import {useQuery} from 'react-query';
import {moviesList, getTags} from '../../fetchers';
import SingleCard from './SingleCard';
import SkeletonCard from './Skeleton';
import Skeleton from './Skeleton';

const Home = ({navigation}: {navigation: any}) => {
  const [tab, setTab] = useState('upcoming');
  const {
    data: movies,
    status,
    error,
    refetch,
  } = useQuery(['movies', tab], moviesList, {
    refetchOnWindowFocus: false,
    enabled: false,
  });

  const {
    data: tags,
    error: tagsError,
    status: tagsStatus,
  } = useQuery('tags', getTags);

  const scrolly = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrolly, 0, 100);

  useEffect(() => {
    getMovies('upcoming');
  }, []);

  useEffect(() => {
    refetch();
  }, [tab]);

  const getMovies = (category: string) => {
    Animated.timing(scrolly, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }).start();
    refetch();
    setTab(category);
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <Text style={Styles.headerText}>Movies</Text>
      </View>
      <Animated.View
        style={[
          Styles.categories,
          {
            opacity: diffClampY.interpolate({
              inputRange: [0, 50],
              outputRange: [1, 0],
            }),
            transform: [
              {
                scale: diffClampY.interpolate({
                  inputRange: [0, 50, 100],
                  outputRange: [1, 0.5, 0],
                }),
              },
            ],
          },
        ]}>
        <Tab
          tab={tab}
          getMovies={getMovies}
          TheTab="upcoming"
          title="Upcoming"
        />
        <Tab tab={tab} getMovies={getMovies} TheTab="popular" title="Popular" />
        <Tab
          tab={tab}
          getMovies={getMovies}
          TheTab="top_rated"
          title="Top Rated"
        />
      </Animated.View>

      {status == 'success' ? (
        <Animated.FlatList
          overScrollMode="never"
          bounces={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrolly}}}],
            {useNativeDriver: true},
          )}
          nestedScrollEnabled
          contentContainerStyle={Styles.flatlist}
          data={movies}
          renderItem={({item}: {item: any}) => {
            return (
              <SingleCard
                key={item.id}
                item={item}
                tags={tags}
                navigation={navigation}
              />
            );
          }}
          keyExtractor={item => item.id}
        />
      ) : (
        <Skeleton />
      )}
    </View>
  );
};

export default Home;
