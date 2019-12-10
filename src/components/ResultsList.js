import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const ResultList = ({title, results}) =>{
    return (
        <View>
            <Text style = {styles.titleStyle}>{title}</Text>
            <FlatList horizontal data = {results} keyExtractor={(result) =>{
                return result.id
            }} renderItem = {({item}) => {
               return <Text>{item.name}</Text> 
              }}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle:{
         fontSize: 18,
         fontWeight: 'bold'
    }
})

export default ResultList