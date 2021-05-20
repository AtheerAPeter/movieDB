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
  backBtn: {
    position: 'absolute',
    left: 0,
    top: 0,
    paddingHorizontal: 23,
    paddingVertical: 20,
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
});

export default Styles;
