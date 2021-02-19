import * as React from 'react';
import {StyleSheet,Text,View} from 'react-native';

export default class instaScreen extends React.Component{
    render(){
        return(
            <View>
                <Text style={styles.text}>Instagram</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
    text:{
        fontWeight:'bold',
        fontSize:40,
        alignSelf:'center',
        color:'#EE77CC',
        marginTop:270,
        backgroundColor:'yellow',
        borderColor:'black',
        borderWidth:4,
        textAlign:'center',
        alignSelf:'center',
        borderRadius:20,
        padding:10
,
    }
})