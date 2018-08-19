import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
    } from "react-native";

class Load extends Component{
    render(){
        return (
            <View style={{flex:1,justifyContent:'center',backgroundColor:'#fff'}}>
                <View style={{width:150,height:150,borderRadius:80,backgroundColor:'#ddd',alignSelf:'center',justifyContent:'center'}}>
                    <Text style={{alignSelf:'center',fontSize:25,color:'#fff',fontWeight:'900'}}>Loading</Text>
                </View>
            </View>
        );
    }
}
export default Load;

