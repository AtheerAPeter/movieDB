import {StyleSheet, Platform} from 'react-native';
import {Colors, Metrics} from '../../Theme';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.clear,
    paddingTop: Platform.OS === 'ios' ? 30 : 0,
  },
  hero: {
    height: Metrics.HEIGHT * 0.35,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  tag: {
    backgroundColor: Colors.dirty,
    margin: 2,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 100,
    color: Colors.altText,
  },

  avatarName: {
    marginTop: 5,

    width: 100,
    textAlign: 'center',
    color: Colors.grayText,
  },
  title: {
    marginTop: 15,
    color: Colors.main,
    backgroundColor: Colors.dirty2,
    height: 50,
    borderRadius: 10,
    width: 60,
  },
  blank: {
    fontWeight: Platform.OS == 'ios' ? '700' : 'bold',
    fontSize: 16,
    backgroundColor: Colors.dirty2,
    height: 30,
    width: 80,
    borderRadius: 10,
  },
  movietitle: {
    textAlign: 'center',
    fontWeight: Platform.OS == 'ios' ? '900' : 'bold',
    fontSize: 20,
    marginTop: 25,
  },
  percentage: {
    textAlign: 'center',
    fontWeight: Platform.OS == 'ios' ? '900' : 'bold',
    fontSize: 20,
    marginTop: 15,
    color: Colors.main,
  },
  sectionTitle: {
    fontWeight: Platform.OS == 'ios' ? '800' : 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
  overview: {
    fontSize: 17,
    color: Colors.altText,
    fontWeight: Platform.OS == 'ios' ? '700' : 'bold',
  },
  skeletonImage: {
    height: '80%',
    width: '38%',
    borderRadius: 10,
    backgroundColor: Colors.dirty2,
  },
  skeletonTitle: {
    marginTop: 25,
    height: 30,
    width: 250,
    backgroundColor: Colors.dirty2,
    borderRadius: 10,
  },
  skeletonSectionTitle: {
    height: 30,
    width: 100,
    borderRadius: 10,
    marginBottom: 8,
    backgroundColor: Colors.dirty2,
  },
  skeletonLine: {
    backgroundColor: Colors.dirty2,
    height: 20,
    borderRadius: 10,
    marginBottom: 5,
  },
  skeletonTag: {
    backgroundColor: Colors.dirty2,
    height: 20,
    borderRadius: 100,
    marginRight: 5,
  },
  skeletonAvatarImage: {
    height: 75,
    width: 75,
    borderRadius: 1000,
    backgroundColor: Colors.dirty2,
  },
});

export default Styles;
