/**
 * @date 23/06/2020
 * @author Vanderson de Moura Vauruk
 * @email vauruk@gmail.com
 * @linkedin https://www.linkedin.com/in/vauruk/
 */

import React, { useEffect } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

import { getUserDataAction } from '../../../services/actions/auth'

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import theme, { styles } from '../Theme';

import {
  useDispatch,
} from 'react-redux';

import Blog from '../Blog'
import SendPost from '../Blog/sendPost'


const Home: () => React$Node = (props) => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserDataAction())
  }, [])


  return (
    <View style={{ height: '100%' }}>
      <SendPost />
      {/* <View style={stylesLocal.sectionContainer}>
        <Text style={stylesLocal.sectionTitle}>Blog Boticario</Text>
        <Text style={stylesLocal.sectionDescription}>Search for Pokémon by name or using the Nactional Pokédex number</Text>
      </View> */}
      <View>
        <Blog />
      </View>
    </View >
  );
};
export default Home;


const stylesLocal = StyleSheet.create({
  scrollView: {
    backgroundColor: theme.WHITE_COLOR,
    //height: '100%',
    // backgroundColor: 'red'
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: theme.TEXT_20,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: theme.TEXT_10,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
