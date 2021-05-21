import {TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-dynamic-vector-icons';

const BackBtn = ({navigation}: {navigation: any}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        paddingHorizontal: 23,
        paddingVertical: 20,
      }}>
      <Icon name="chevron-back" type="Ionicons" size={30} />
    </TouchableOpacity>
  );
};

export default BackBtn;
