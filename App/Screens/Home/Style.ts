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
});

export default Styles;
