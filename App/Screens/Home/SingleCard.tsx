import {TouchableOpacity, View, Text, Image, Platform} from 'react-native';
import React from 'react';
import {Colors, Metrics} from '../../Theme';
import Styles from './Style';
import moment from 'moment';

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
          style={Styles.image}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          }}
        />
        <View style={Styles.infoContainer}>
          <Text numberOfLines={1} style={Styles.title}>
            {item.title}
          </Text>
          <Text style={Styles.date}>
            {moment(item.release_date).format('MMMM D, yyyy')}
          </Text>
          <View style={Styles.tags}>
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
        <Text style={Styles.percentage}>{item.vote_average * 10}%</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SingleCard;
