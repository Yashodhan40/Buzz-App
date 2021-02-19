import * as React from 'react';
import {StyleSheet,Text,View} from 'react-native';

export default class faceScreen extends React.Component{
    render(){
        return(
            <View>
                <Text style={styles.text}>FaceBook</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
    text:{
        fontWeight:'bold',
         alignSelf:'center',
        color:'blue',
        marginTop:270,
        fontSize:40,
        backgroundColor:'#22DD00',
        borderRadius:20,
        alignSelf:'center',
        borderColor:'black',
        borderWidth:4,
        textAlign:'center',
        padding:10

    }
})