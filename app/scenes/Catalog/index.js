import React, { Component } from 'react';
import { StyleSheet,Dimensions, Animated, View, Platform, StatusBar} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { SearchBarProvider } from './component/searchBarAnimation'

import SearchBar from './component/SearchBar';
import Tab from './component/tabs';
import i18n from '../../utils/i18n'

import SearchBarSuggestion from './component/SearchBarSuggestion';
import SearchBarLocationSuggestion from './component/SearchBarLocationSuggestion';


const initialLayout = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height - 60
};


class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: 'tab1', title: i18n.t('MARKET')  },
        { key: 'tab2', title: i18n.t('TOOLS') }
      ],
    };
  }


  _handleIndexChange = index => {
    this.setState({
      currentTab: this.state.routes[index].key,
      index
    });
  }
  _getLabelText = ({ route }) => route.title;
  _renderHeader = (animation, canJumpToTab) => props => (
    <SearchBar
      animation={animation}
      changeInputFocus={suggestionFocus =>
        this.setState({suggestionFocus})
      }
      renderTabBar={() => (
        <TabBar
          onTabPress={({route}) => {
            if(route.key != this.state.currentTab && canJumpToTab) {
              animation.onTabPress(route);
            }
          }}
          getLabelText={this._getLabelText}
          indicatorStyle={styles.indicator}
          style={styles.tabbar}
          labelStyle={styles.label}
          {...props}
        />
      )}
    />
  );

  _renderScene = SceneMap({
    tab1: Tab,
    tab2: Tab
  });

  _renderSuggestion(animation) {
    let focus = this.state.suggestionFocus;
    if(focus) {
      let styleAnimation = animation.getStyleSuggestion();
      let Suggestion = (focus == 'location') ?
        SearchBarLocationSuggestion :
        SearchBarSuggestion;

      return (
        <Animated.View style={[initialLayout, styles.suggestionWrap, styleAnimation]}>
          <Suggestion />
        </Animated.View>
      );
    }
  }


  render() {
    return (
      <SearchBarProvider currentTab={this.state.currentTab}>
        {(animation, { canJumpToTab }) =>
          <View style={initialLayout}>
            {Platform.OS === 'android' &&
            <StatusBar
              translucent={true}
              backgroundColor="#30225e"
            />
            }
            <TabView
              style={styles.container}
              navigationState={this.state}
              renderScene={this._renderScene}
              renderTabBar={this._renderHeader(animation, canJumpToTab)}
              onIndexChange={this._handleIndexChange}
              initialLayout={initialLayout}
              swipeEnabled={false} // TODO ...
              canJumpToTab={() => canJumpToTab}
              useNativeDriver
            />

            {this._renderSuggestion(animation)}
          </View>
        }
      </SearchBarProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edeef0'
  },
  tabbar: {
    backgroundColor: '#fff',
    elevation: 0
  },
  indicator: {
    backgroundColor: '#f0c621'
  },
  label: {
    color: '#b72e66',
    margin: 0,
    marginTop: 6,
    marginBottom: 6,
    fontWeight: '400'
  },
  suggestionWrap: {
    position: 'absolute',
    backgroundColor: '#fff',
    zIndex: 3
  }
});

export default Catalog;

