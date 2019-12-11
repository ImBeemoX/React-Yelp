import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'


const ResultsDetail = ({result}) =>{
    return <View>
          <Image style={styles.imageStyle} source={{url: result.image_url}}/>
          <Text style={styles.textStyle}> {result.name}</Text>
           <Text style={{marginHorizontal: 15, marginBottom: 5}}>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 250,
        height: 150,
        marginHorizontal:10,
        borderRadius: 4,
        marginVertical: 5,
    },
    textStyle:{
        fontWeight: 'bold',
        fontSize: 16,
        marginHorizontal:12
    },
    containerStyle:{
        marginLeft:15
    }
})

export default ResultsDetail