import React from 'react';
import {View, ScrollView} from 'react-native';
import Styles from './Style';
import BackBtn from '../../Components/BackBtn';
import {Colors} from '../../Theme';

const Skeleton = ({navigation}: {navigation: any}) => {
  return (
    <ScrollView
      style={Styles.container}
      contentContainerStyle={{paddingBottom: 40}}>
      <View style={Styles.hero}>
        <BackBtn navigation={navigation} />
        <View style={Styles.skeletonImage} />
      </View>
      <View style={{alignItems: 'center'}}>
        <View style={Styles.skeletonTitle} />
      </View>

      <View style={{alignItems: 'center'}}>
        <View style={Styles.title} />
      </View>

      <View style={{marginHorizontal: 20, marginTop: 30}}>
        <View style={Styles.skeletonSectionTitle} />
        {/* lines of text */}
        {[270, 280, 250, 300].map(width => (
          <View style={[Styles.skeletonLine, {width}]} />
        ))}
      </View>
      <View style={{marginHorizontal: 20, marginTop: 20}}>
        <View style={Styles.skeletonSectionTitle} />

        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {/* tags */}
          {[100, 80, 60].map(width => (
            <View style={[Styles.skeletonTag, {width}]} />
          ))}
        </View>
      </View>
      <View style={{marginHorizontal: 0, marginTop: 20}}>
        <View style={[Styles.skeletonSectionTitle, {marginLeft: 20}]} />
        {/* avatars */}
        <ScrollView horizontal style={{paddingLeft: 10}}>
          {[...Array(5)].map(() => (
            <SkeletonAvatar />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Skeleton;

const SkeletonAvatar = () => {
  return (
    <View
      style={{
        marginRight: 10,
        alignItems: 'center',
      }}>
      <View style={Styles.skeletonAvatarImage} />
      <View style={[Styles.avatarName, Styles.blank]} />
    </View>
  );
};
