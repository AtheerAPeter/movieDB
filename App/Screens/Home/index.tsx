import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  FlatList,
  Image,
  ScrollView,
  Animated,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import Styles from './Style';
import {Colors, Metrics} from '../../Theme';
import Tab from './Tab';
import DropShadow from 'react-native-drop-shadow';
import moment from 'moment';
import config from '../../config';

const Home = ({navigation}: {navigation: any}) => {
  const [tab, setTab] = useState('');
  const [movies, setMovies] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const scrolly = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrolly, 0, 100);
  useEffect(() => {
    getMovies('upcoming');
  }, []);

  const blankData = [{}, {}, {}, {}, {}];

  const getMovies = (category: string) => {
    Animated.timing(scrolly, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }).start();
    setLoading(true);
    setMovies([]);
    setTab(category);
    fetch(`${config.tmdbUrl}/movie/${category}?api_key=${config.tmdbApiKey}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => {
        setLoading(false);
        setMovies(result.results);
      })
      .catch(error => {
        setLoading(false);
        console.log('error', error);
      });

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `${config.tmdbUrl}/genre/movie/list?api_key=${config.tmdbApiKey}&language=en-US`,
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        setLoading(false);
        setTags(result.genres);
      })
      .catch(error => {
        setLoading(false);
        console.log('error', error);
      });
  };

  return (
    <View style={Styles.container}>
      <View
        style={[
          Styles.header,
          {
            position: 'absolute',
            zIndex: 2,
            backgroundColor: Colors.clear,
            width: Metrics.WIDTH,
            top: Platform.OS == 'ios' ? 30 : 0,
          },
        ]}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: Platform.OS == 'ios' ? '800' : 'bold',
            marginTop: 20,
          }}>
          Movies
        </Text>
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

      {!loading && movies.length > 0 && tags.length > 0 ? (
        <Animated.FlatList
          overScrollMode="never"
          bounces={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrolly}}}],
            {useNativeDriver: true},
          )}
          onRefresh={() => getMovies(tab)}
          refreshing={loading}
          nestedScrollEnabled
          contentContainerStyle={{
            paddingVertical: 20,

            paddingTop: 140,
          }}
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
        <FlatList
          nestedScrollEnabled
          contentContainerStyle={{
            paddingVertical: 20,
            flex: 1,
            paddingTop: 140,
          }}
          data={blankData}
          renderItem={() => {
            return <BlankCard />;
          }}
          keyExtractor={(item: any, index) => item.id}
        />
      )}
    </View>
  );
};

export default Home;

const SingleCard = ({
  item,
  tags,
  navigation,
}: {
  item: any;
  tags: any;
  navigation: any;
}) => {
  return (
    <TouchableOpacity
      delayPressIn={60}
      onPress={() => navigation.navigate('SingleMovie', {movieID: item.id})}>
      <View style={Styles.singleCard}>
        <Image
          resizeMode={'contain'}
          style={{
            height: 130,
            width: 90,
            borderRadius: 13,
            marginRight: 15,
          }}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          }}
        />
        <View
          style={{
            height: '100%',
            paddingTop: 5,
            width: (Metrics.WIDTH - 40) / 3 + 50,
          }}>
          <Text
            numberOfLines={1}
            style={{
              width: Metrics.WIDTH - 180,
              fontWeight: 'bold',
              fontSize: 18,
              color: Colors.grayText,
            }}>
            {item.title}
          </Text>
          <Text
            style={{
              marginTop: 13,
              color: Colors.altText,
              fontWeight: '500',
            }}>
            {moment(item.release_date).format('MMMM D, yyyy')}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginTop: 13,
            }}>
            {item.genre_ids.map((genre: object, index: number) => {
              return index >= 3 ? null : (
                <View key={index} style={Styles.tag}>
                  <Text style={{fontSize: 11}}>
                    {tags.filter((e: any) => e.id == genre)[0].name}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
        <Text
          style={{
            fontSize: 20,
            color: Colors.main,
            fontWeight: Platform.OS == 'ios' ? '900' : 'bold',

            position: 'absolute',
            bottom: 15,
            right: 15,
          }}>
          {item.vote_average * 10}%
        </Text>
      </View>
    </TouchableOpacity>
  );
};

//blank
const BlankCard = () => {
  return (
    <TouchableOpacity delayPressIn={60}>
      <View style={Styles.singleCard}>
        <View
          style={{
            height: 130,
            width: 90,
            borderRadius: 13,
            marginRight: 15,
            backgroundColor: Colors.dirty2,
          }}
        />
        <View
          style={{
            height: '100%',
            paddingTop: 5,
            width: (Metrics.WIDTH - 40) / 3 + 50,
          }}>
          <View
            style={{
              height: 20,
              width: Metrics.WIDTH - 180,
              borderRadius: 10,
              backgroundColor: Colors.dirty2,
            }}></View>
          <View
            style={{
              marginTop: 13,
              height: 20,
              backgroundColor: Colors.dirty2,
              borderRadius: 10,
            }}></View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginTop: 13,
            }}>
            <View
              style={[
                Styles.tag,
                {backgroundColor: Colors.dirty2, width: 50, height: 20},
              ]}></View>
            <View
              style={[
                Styles.tag,
                {backgroundColor: Colors.dirty2, width: 70, height: 20},
              ]}></View>
            <View
              style={[
                Styles.tag,
                {backgroundColor: Colors.dirty2, width: 40, height: 20},
              ]}></View>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 15,
            right: 15,
            backgroundColor: Colors.dirty2,
            height: 30,
            width: 40,
            borderRadius: 10,
          }}></View>
      </View>
    </TouchableOpacity>
  );
};
