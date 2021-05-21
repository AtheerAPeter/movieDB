import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import Styles from './Style';

const SkeletonCard = () => {
  return (
    <TouchableOpacity delayPressIn={60}>
      <View style={Styles.singleCard}>
        <View style={Styles.skeletonImage} />
        <View style={Styles.skeletonInfoContainer}>
          <View style={Styles.skeletonTitle} />
          <View style={Styles.skeletonDate} />
          <View style={Styles.skeletonTags}>
            {[50, 70, 40].map(width => (
              <View style={[Styles.skeletonTag, {width}]} />
            ))}
          </View>
        </View>
        <View style={Styles.skeletonPercentage} />
      </View>
    </TouchableOpacity>
  );
};

export default SkeletonCard;
