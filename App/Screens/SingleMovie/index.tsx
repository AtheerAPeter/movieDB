import {Image, Text, View, Platform, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import Styles from './Style';
import config from '../../config';
import {Colors} from '../../Theme';
import BackBtn from '../../Components/BackBtn';
import Avatar from './Avatar';
import Skeleton from './Skeleton';
import {useQuery} from 'react-query';
import {movieDetails, getCredits} from '../../fetchers';

const SingleMovie = ({navigation, route}: {navigation: any; route: any}) => {
  const id = route.params.movieID;
  const {data, status, error} = useQuery(['movieDetails', id], movieDetails);
  const {
    data: credits,
    status: creditsStatus,
    error: creditsError,
  } = useQuery(['credits', id], getCredits);

  return status == 'success' && creditsStatus == 'success' ? (
    <ScrollView
      nestedScrollEnabled
      style={Styles.container}
      contentContainerStyle={{paddingBottom: 50}}>
      <View style={Styles.hero}>
        <BackBtn navigation={navigation} />
        <Image
          resizeMode="cover"
          style={{height: '80%', width: '38%', borderRadius: 10}}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
          }}
        />
      </View>

      <Text style={Styles.movietitle}>{data.original_title}</Text>
      <Text style={Styles.percentage}>{data.vote_average * 10}%</Text>
      <View style={{marginHorizontal: 20, marginTop: 30}}>
        <Text style={Styles.sectionTitle}>Overview</Text>
        <Text style={Styles.overview}>{data.overview}</Text>
      </View>
      <View style={{marginHorizontal: 20, marginTop: 20}}>
        <Text style={Styles.sectionTitle}>Genres</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {data?.genres?.map((item: any) => {
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
        <Text style={[Styles.sectionTitle, {marginLeft: 20}]}>Credits</Text>
        <ScrollView horizontal style={{paddingLeft: 10}}>
          {credits?.map((item: any) => {
            return <Avatar item={item} />;
          })}
        </ScrollView>
      </View>
    </ScrollView>
  ) : (
    <Skeleton navigation={navigation} />
  );
};

export default SingleMovie;
