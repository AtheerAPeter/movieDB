import Styles from './Style';
import {Image, Text, View, Platform} from 'react-native';
import React from 'react';

const Avatar = ({item}: {item: any}) => {
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
};

export default Avatar;
