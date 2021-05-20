import {
  Image,
  Text,
  View,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Styles from './Style';
import config from '../../config';
import Icon from 'react-native-dynamic-vector-icons';
import {Colors} from '../../Theme';

const SingleMovie = ({navigation, route}: {navigation: any; route: any}) => {
  const id = route.params.movieID;

  const [data, setData] =
    useState<null | {
      original_title: any;
      vote_average: any;
      poster_path: any;
      overview: any;
      genres: any;
    }>(null);
  const [loading, setLoading] = useState(false);
  const [credits, setCredits] = useState<any[]>([]);

  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = () => {
    setLoading(true);
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `${config.tmdbUrl}/movie/${id}?api_key=${config.tmdbApiKey}&language=en-US`,
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        setLoading(false);
        setData(result);
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
      `${config.tmdbUrl}/movie/${id}/credits?api_key=${config.tmdbApiKey}&language=en-US`,
      requestOptions,
    )
      .then(response => response.json())
      .then(result => setCredits(result.cast))
      .catch(error => console.log('error', error));
  };

  return !loading && data && credits ? (
    <ScrollView
      nestedScrollEnabled
      style={Styles.container}
      contentContainerStyle={{paddingBottom: 50}}>
      <View style={Styles.hero}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={Styles.backBtn}>
          <Icon name="chevron-back" type="Ionicons" size={30} />
        </TouchableOpacity>
        <Image
          resizeMode="cover"
          style={{height: '80%', width: '38%', borderRadius: 10}}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
          }}
        />
      </View>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: Platform.OS == 'ios' ? '900' : 'bold',
          fontSize: 20,
          marginTop: 25,
        }}>
        {data.original_title}
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: Platform.OS == 'ios' ? '900' : 'bold',
          fontSize: 20,
          marginTop: 15,
          color: Colors.main,
        }}>
        {data.vote_average * 10}%
      </Text>
      <View style={{marginHorizontal: 20, marginTop: 30}}>
        <Text
          style={{
            fontWeight: Platform.OS == 'ios' ? '800' : 'bold',
            fontSize: 18,
            marginBottom: 8,
          }}>
          Overview
        </Text>
        <Text
          style={{
            fontSize: 17,
            color: Colors.altText,
            fontWeight: Platform.OS == 'ios' ? '700' : 'bold',
          }}>
          {data.overview}
        </Text>
      </View>
      <View style={{marginHorizontal: 20, marginTop: 20}}>
        <Text
          style={{
            fontWeight: Platform.OS == 'ios' ? '800' : 'bold',
            fontSize: 18,
            marginBottom: 8,
          }}>
          Genres
        </Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {data.genres.map((item: any) => {
            return (
              <View key={item.id} style={Styles.tag}>
                <Text style={{fontSize: 13, fontWeight: 'bold'}}>
                  {item.name}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
      <View style={{marginHorizontal: 0, marginTop: 20}}>
        <Text
          style={{
            marginLeft: 20,
            fontWeight: Platform.OS == 'ios' ? '800' : 'bold',
            fontSize: 18,
            marginBottom: 10,
          }}>
          Credits
        </Text>
        <ScrollView horizontal style={{paddingLeft: 10}}>
          {credits &&
            credits.map(item => {
              return (
                <View
                  key={item.id}
                  style={{
                    marginRight: 10,
                    alignItems: 'center',
                  }}>
                  {item.profile_path ? (
                    <Image
                      style={{height: 75, width: 75, borderRadius: 1000}}
                      source={{
                        uri: `https://image.tmdb.org/t/p/w500${item.profile_path}`,
                      }}
                    />
                  ) : (
                    <Image
                      style={{height: 75, width: 75, borderRadius: 1000}}
                      source={require('../../../assets/user.png')}
                    />
                  )}

                  <Text
                    numberOfLines={2}
                    style={[
                      Styles.avatarName,
                      {
                        fontWeight: Platform.OS == 'ios' ? '700' : 'bold',
                        fontSize: 16,
                      },
                    ]}>
                    {item.name}
                  </Text>
                </View>
              );
            })}
        </ScrollView>
      </View>
    </ScrollView>
  ) : (
    <ScrollView
      style={Styles.container}
      contentContainerStyle={{paddingBottom: 40}}>
      <View style={Styles.hero}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={Styles.backBtn}>
          <Icon name="chevron-back" type="Ionicons" size={30} />
        </TouchableOpacity>
        <View
          style={{
            height: '80%',
            width: '38%',
            borderRadius: 10,
            backgroundColor: Colors.dirty2,
          }}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            marginTop: 25,
            height: 30,
            width: 250,
            backgroundColor: Colors.dirty2,
            borderRadius: 10,
          }}
        />
      </View>

      <View style={{alignItems: 'center'}}>
        <View style={Styles.title} />
      </View>

      <View style={{marginHorizontal: 20, marginTop: 30}}>
        <View
          style={{
            height: 30,
            width: 100,
            borderRadius: 10,
            marginBottom: 8,
            backgroundColor: Colors.dirty2,
          }}
        />
        <View
          style={{
            backgroundColor: Colors.dirty2,
            height: 20,
            width: 270,
            borderRadius: 10,
            marginBottom: 5,
          }}
        />
        <View
          style={{
            backgroundColor: Colors.dirty2,
            height: 20,
            width: 280,
            borderRadius: 10,
            marginBottom: 5,
          }}
        />
        <View
          style={{
            backgroundColor: Colors.dirty2,
            height: 20,
            width: 250,
            borderRadius: 10,
            marginBottom: 5,
          }}
        />
        <View
          style={{
            backgroundColor: Colors.dirty2,
            height: 20,
            width: 300,
            borderRadius: 10,
            marginBottom: 5,
          }}
        />
      </View>
      <View style={{marginHorizontal: 20, marginTop: 20}}>
        <View
          style={{
            height: 30,
            width: 80,
            borderRadius: 10,
            marginBottom: 8,
            backgroundColor: Colors.dirty2,
          }}
        />

        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <View
            style={{
              backgroundColor: Colors.dirty2,
              height: 20,
              width: 100,
              borderRadius: 100,
              marginRight: 5,
            }}
          />
          <View
            style={{
              backgroundColor: Colors.dirty2,
              height: 20,
              width: 80,
              borderRadius: 100,
              marginRight: 5,
            }}
          />
          <View
            style={{
              backgroundColor: Colors.dirty2,
              height: 20,
              width: 60,
              borderRadius: 100,
            }}
          />
        </View>
      </View>
      <View style={{marginHorizontal: 0, marginTop: 20}}>
        <View
          style={{
            height: 30,
            width: 80,
            borderRadius: 10,
            marginBottom: 8,
            backgroundColor: Colors.dirty2,
            marginLeft: 20,
          }}
        />
        <ScrollView horizontal style={{paddingLeft: 10}}>
          <View
            style={{
              marginRight: 10,
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 75,
                width: 75,
                borderRadius: 1000,
                backgroundColor: Colors.dirty2,
              }}
            />

            <View style={[Styles.avatarName, Styles.blank]} />
          </View>
          <View
            style={{
              marginRight: 10,
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 75,
                width: 75,
                borderRadius: 1000,
                backgroundColor: Colors.dirty2,
              }}
            />

            <View style={[Styles.avatarName, Styles.blank]} />
          </View>
          <View
            style={{
              marginRight: 10,
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 75,
                width: 75,
                borderRadius: 1000,
                backgroundColor: Colors.dirty2,
              }}
            />

            <View style={[Styles.avatarName, Styles.blank]} />
          </View>
          <View
            style={{
              marginRight: 10,
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 75,
                width: 75,
                borderRadius: 1000,
                backgroundColor: Colors.dirty2,
              }}
            />

            <View style={[Styles.avatarName, Styles.blank]} />
          </View>
          <View
            style={{
              marginRight: 10,
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 75,
                width: 75,
                borderRadius: 1000,
                backgroundColor: Colors.dirty2,
              }}
            />

            <View style={[Styles.avatarName, Styles.blank]} />
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default SingleMovie;
