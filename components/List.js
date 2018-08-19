import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity
    } from "react-native";


import { Container, Content, Header, Left, Icon, Title, Body, Right } from "native-base";

const Screen_Height = Dimensions.get('window').height;
const Screen_Width = Dimensions.get('window').width;

class List extends Component{
    render(){
        return (
            <TouchableOpacity style={{height:Screen_Height/7,backgroundColor:'#fff',borderBottomWidth:0.8,marginVertical:3}}
                    onPress={this.props.onPress}
                    >

                    <View style={{flexDirection:'row',flex:1}}>
                    
                    <View style={{flex:0.8,margin:5,backgroundColor:'#fff'}}>
                       <Image source={require('../image/user.png')} style={{flex:1,height:null,width:null,resizeMode:'cover'}}/>
                    
                    </View>
                    <View style={{flex:2,backgroundColor:'#fff',marginVertical:5,justifyContent:'space-evenly'}}>
                        <Text style={{fontWeight:'700'}}>
                            {this.props.name}
                        </Text>
                        <Text style={{fontWeight:'700'}}>
                           {this.props.id}
                        </Text>
                        <Text  style={{fontWeight:'700',fontSize:16}}>
                            {this.props.job}
                        </Text>
                    </View>
                    <View style={{flex:0.8,backgroundColor:'#fff',justifyContent:'flex-start'}}>
                        <Text style={{fontWeight:'400',marginTop:10,fontSize:15}}>
                           {this.props.status}
                        </Text>
                        <Text style={{fontWeight:'900',fontSize:15}}>
                           Rs. {this.props.money}
                        </Text>
                    </View>

                    </View>


                    </TouchableOpacity>
        );
    }
}
export default List;

