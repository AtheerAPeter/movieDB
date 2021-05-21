import {StyleSheet, Platform} from 'react-native';
import {Colors, Metrics} from '../../Theme';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.clear,
    paddingTop: Platform.OS === 'ios' ? 30 : 0,
    position: 'relative',
  },
  header: {
    justifyContent: 'center',
    paddingTop: 10,
    paddingHorizontal: 20,
    position: 'absolute',
    zIndex: 2,
    backgroundColor: Colors.clear,
    width: Metrics.WIDTH,
    top: Platform.OS == 'ios' ? 30 : 0,
  },
  headerText: {
    fontSize: 30,
    fontWeight: Platform.OS == 'ios' ? '800' : 'bold',
    marginTop: 20,
  },
  categories: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    position: 'absolute',
    zIndex: 4,
    width: Metrics.WIDTH,
    paddingHorizontal: 20,
    top: Platform.OS == 'ios' ? 95 : 65,
  },
  category: {
    backgroundColor: Colors.dirty,
    width: Metrics.WIDTH / 3 - 20,
    borderRadius: 1000,
    paddingVertical: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  singleCard: {
    height: 160,
    marginBottom: 15,
    alignItems: 'center',
    borderRadius: 13,
    shadowColor: 'gray',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,

    elevation: 6,

    paddingHorizontal: 15,
    flexDirection: 'row',
    paddingVertical: 15,
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  tag: {
    backgroundColor: Colors.dirty,
    margin: 2,
    paddingHorizontal: 10,
    paddingVertical: 2,

    color: Colors.altText,
    borderRadius: 10,
  },
  flatlist: {
    paddingVertical: 20,

    paddingTop: 140,
  },
  image: {
    height: 130,
    width: 90,
    borderRadius: 13,
    marginRight: 15,
  },
  infoContainer: {
    height: '100%',
    paddingTop: 5,
    width: (Metrics.WIDTH - 40) / 3 + 50,
  },
  title: {
    width: Metrics.WIDTH - 180,
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.grayText,
  },
  date: {
    marginTop: 13,
    color: Colors.altText,
    fontWeight: '500',
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 13,
  },
  percentage: {
    fontSize: 20,
    color: Colors.main,
    fontWeight: Platform.OS == 'ios' ? '900' : 'bold',

    position: 'absolute',
    bottom: 15,
    right: 15,
  },
  skeletonImage: {
    height: 130,
    width: 90,
    borderRadius: 13,
    marginRight: 15,
    backgroundColor: Colors.dirty2,
  },
  skeletonInfoContainer: {
    height: '100%',
    paddingTop: 5,
    width: (Metrics.WIDTH - 40) / 3 + 50,
  },
  skeletonTitle: {
    height: 20,
    width: Metrics.WIDTH - 180,
    borderRadius: 10,
    backgroundColor: Colors.dirty2,
  },
  skeletonDate: {
    marginTop: 13,
    height: 20,
    backgroundColor: Colors.dirty2,
    borderRadius: 10,
  },
  skeletonTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 13,
  },
  skeletonTag: {
    backgroundColor: Colors.dirty2,
    margin: 2,
    paddingHorizontal: 10,
    paddingVertical: 2,
    color: Colors.altText,
    borderRadius: 10,
    height: 20,
  },
  skeletonPercentage: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    backgroundColor: Colors.dirty2,
    height: 30,
    width: 40,
    borderRadius: 10,
  },
});

export default Styles;
