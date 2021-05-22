import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Styles from './Style';
import {Colors, Metrics} from '../../Theme';

const Tab: React.FC<{
  getMovies: (category: string) => void;
  tab: string;
  TheTab: string;
  title: string;
}> = ({getMovies, tab, TheTab, title}) => {
  return (
    <TouchableOpacity
      onPress={() => getMovies(TheTab)}
      style={[
        Styles.category,
        {
          backgroundColor: tab == TheTab ? Colors.main : Colors.dirty,
          shadowColor: '#000',
          shadowOffset: {
            width: 5,
            height: 4,
          },
          shadowOpacity: tab == TheTab ? 0.3 : 0,
          shadowRadius: 7,

          elevation: tab == TheTab ? 10 : 0,
        },
      ]}>
      <Text
        style={[
          Styles.categoryText,
          {color: tab == TheTab ? Colors.clear : '#000'},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Tab;
