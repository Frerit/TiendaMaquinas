import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FlatList } from './searchBarAnimation';
import API from './../../../utils/api';
import Item_Tabs from './Item-tabs';

export default class Tab extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      ArticleProducst: Array(10).fill().map((_, index) => ({_id: index})),
      dataSource: Array(10).fill().map((_, index) => ({_id: index}))
    };
  }



  async componentDidMount() {
    const data = await API.getArticleAwait();
    this.setState({
      ArticleProducst: data
    })
  }

  renderItem = ({ item }) => <Item_Tabs navigation={this.props.navigation} article={item}/>;

  keyExtractor = item => item._id.toString();

  render() {
    return (
      <FlatList
        style={styles.wrapper}
        data={this.state.ArticleProducst}
        renderItem={this.renderItem}
        keyExtractor= { this.keyExtractor }
        tabRoute={this.props.route.key}

      />
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15
  },
  item: {
    height: 150,
    backgroundColor: '#fff',
    marginBottom: 20,
    shadowColor: 'rgb(75, 89, 101)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1
  }
});
