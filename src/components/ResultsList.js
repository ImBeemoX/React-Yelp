import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import ResultsDetail from './ResultsDetail'
import {withNavigation} from 'react-navigation'

const ResultList = ({title, results, navigation}) =>{
    if(!results.length){
        return null
    }
    return (
        <View>
            <Text style = {styles.titleStyle}>{title}</Text>
            <FlatList showsHorizontalScrollIndicator={false} horizontal data = {results} keyExtractor={(result) =>{
                return result.id
            }} renderItem = {({item}) => {
                return (<TouchableOpacity onPress={() => navigation.navigate('Detail', {id: item.id})}>
                    <ResultsDetail result={item}/>
                </TouchableOpacity>)
               
              }}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle:{
         fontSize: 18,
         fontWeight: 'bold',
         marginLeft: 15
    }
})

export default withNavigation(ResultList)