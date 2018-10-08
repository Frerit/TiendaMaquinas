import React from 'react';
import { Text, View , Image, StyleSheet, TouchableHighlight} from 'react-native';

const ItemCatalogo = (
  props,
) => (
  <TouchableHighlight>
    <View style={styles.item}>
      <View>
        <Image
          style={styles.image}
          source={{uri: props.article.image }}></Image>
      </View>
      <View  style={styles.content}>
        <Text style={styles.articleName}>{props.article.name}</Text>
        <Text style={styles.articlePrice}>{props.article.description}</Text>
        <Text style={styles.articlePrice}>{props.article.price}</Text>
        <Text style={styles.articlePrice}>{props.article.quantity}</Text>
      </View>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15
  },
  image:{
    width:70,
    height:70,
    padding: 5,
    margin: 5,
  },
  content:{
    paddingLeft:10 ,
    justifyContent:'center'
  },
  item: {
    elevation: 1,
    borderRadius: 2,
    flex: 1,
    justifyContent: 'flex-start', // main axis
    alignItems: 'center', // cross axis
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 18,
    paddingRight: 16,
    marginLeft: 14,
    marginRight: 14,
    marginTop: 0,
    height: 150,
    backgroundColor: '#fff',
    marginBottom: 20,
    shadowColor: 'rgb(75, 89, 101)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    flexDirection: 'row',
  }
})
export default ItemCatalogo;
