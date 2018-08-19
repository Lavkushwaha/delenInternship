import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    Image
    } from "react-native";

import { Container, Content, Header, Left, Icon, Title, Body, Right } from "native-base";

import * as firebase from 'firebase';
import Load from "../Load";

var config = {
        apiKey: "AIzaSyBQCDr6Z3Pvc-sDojxZiQld7duitiDygHs",
        authDomain: "scrap-edu.firebaseapp.com",
        databaseURL: "https://scrap-edu.firebaseio.com",
        projectId: "scrap-edu",
        storageBucket: "scrap-edu.appspot.com",
        messagingSenderId: "4131487762"
      };
 
!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

const Screen_Height = Dimensions.get('window').height;
const Screen_Width = Dimensions.get('window').width;

class Order extends Component{


    constructor(){
        super();
        this.state ={
          data:'',
          isLoading:true
        }
      }
    
    componentDidMount() {
        var db = firebase.database();
        var ref = db.ref("/"+this.props.navigation.getParam('id')+"/");
        // var ds = '';
        // that = this;
        // Attach an asynchronous callback to read the data at our posts reference
        try{
          
          ref.on('value', (snap) =>{  
           var dres = snap.val();
           //alert(dres.Name)
            this.setState({
              data:dres,
              isLoading:false
            })
          });
        // alert(this.state.data)
        }
        catch(err){
          console.warn(err.message);
        }
      } 


    render(){
       if(!this.state.isLoading){
        return (
            <Container>
                <Header style={{justifyContent:'center',backgroundColor:'#ddd'}}>
                    <Left>
                        <TouchableOpacity
                        onPress={() =>{this.props.navigation.navigate('Main')}}
                        >
                        <Icon name="md-arrow-back" />
                        </TouchableOpacity>
                      
                    </Left>
                    <Body>
                        <Title style={{color:'#000'}}>Order</Title>
                    </Body>
                    <Right />
                </Header>
                <ScrollView style={{flex:1,backgroundColor:'#fff'}}>
                    <View style={{height:Screen_Height/11,backgroundColor:'#d12365',justifyContent:'center'}}>
                        <Text style={{fontSize:18,color:'#fff',marginLeft:20}}>
                            {this.state.data.Job}
                        </Text>
                    </View>
                    <View style={{height:Screen_Height/5,backgroundColor:'#ddd'}}>
                        
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:10,marginTop:10}}>
                        <Text>
                        {this.state.data.Name}
                        </Text>
 
                        <Text style={{fontSize:16}}>
                            {this.state.data.Status}
                        </Text>
                        </View>
                        
                        <View style={{flex:1,marginLeft:10,marginTop:10,marginRight:Screen_Width/2.5,backgroundColor:'#ddd'}}>
                            <Text style={{fontWeight:'600'}}> {this.state.data.Address} </Text>
                        </View>

                    </View>

                    <View style={{width:Screen_Width,height:Screen_Height/6,borderWidth:0.8,flexDirection:'row',justifyContent:'center'}}>
                        <View style={{flex:2,margin:10}}>
                            <Image source={require('../image/user.png')} style={{flex:1,height:null,width:null,resizeMode:'cover'}}/>
                        </View>

                        <View style={{flex:4,backgroundColor:'#fff',justifyContent:'center'}}>
                            <Text style={{fontSize:16,fontWeight:'700'}}>Job is not Assigned</Text>
                        </View>
                    
                         <View style={{flex:2,backgroundColor:'#fff',justifyContent:'center'}}>
                        <Icon name="map" style={{color:'grey',alignSelf:'center'}}/>
                        <Text>Live Tracking</Text>
                        </View>
                    </View>

                    <View style={{height:Screen_Height/2,marginTop:10,marginHorizontal:20}}>

                    <View style={{flexDirection:'row',marginTop:5}}>
                    <View style={{flex:1}}>
                    <Text style={{fontWeight:'600'}}>Rate</Text>

                        </View>

                        <View style={{flex:1}}>
                        <Text style={{}}>Rs.50-Rs.200 per Hour</Text>

                        </View>
                    </View>
                    
                    <View style={{flexDirection:'row',marginTop:5}}>
                    <View style={{flex:1}}>
                    <Text style={{fontWeight:'600'}}>Tax</Text>

                        </View>

                        <View style={{flex:1}}>
                        <Text style={{}}>null(SGST)</Text>

                        </View>
                    </View>
                    
                    <View style={{flexDirection:'row',marginTop:5}}>
                    <View style={{flex:1}}>
                    <Text style={{fontWeight:'600'}}>Discount</Text>

                        </View>

                        <View style={{flex:1}}>
                        <Text style={{}}> </Text>

                        </View>
                    </View>

                    <View style={{flexDirection:'row',marginTop:5}}>
                    <View style={{flex:1}}>
                    <Text style={{fontWeight:'600'}}>Grand Total</Text>

                        </View>

                        <View style={{flex:1}}>
                        <Text style={{fontWeight:'900'}}>Rs {this.state.data.Money} </Text>

                        </View>
                    </View>

                    <View style={{flexDirection:'row',marginTop:5}}>
                        <View style={{flex:1}}>
                        <Text style={{fontWeight:'600'}}>Start Time</Text>

                        </View>

                        <View style={{flex:1}}>
                        <Text style={{}}> </Text>

                        </View>
                    </View>

                    <View style={{flexDirection:'row',marginTop:5}}>
                        <View style={{flex:1}}>
                        <Text style={{fontWeight:'600'}}>End Time</Text>
                        </View>

                            <View style={{flex:1}}>
                            <Text style={{}}> </Text>
                            </View> 
                    
                    </View>

                     <View style={{flexDirection:'row',marginTop:5}}>
                        <View style={{flex:1}}>
                        <Text style={{fontWeight:'600'}}>Payment Status</Text>
                        </View>

                        <View style={{flex:1}}>
                        <Text style={{color:'red',fontWeight:'900'}}>{this.state.data.Status}</Text>
                        </View>
                    </View>
                    
                    <View style={{marginTop:20}}>
                        <Text style={{fontSize:18,fontWeight:'900'}}>
                            Job Details
                        </Text>
                        <View style={{borderBottomWidth:0.1,marginTop:10}}>
                        <Text style={{fontSize:18,fontWeight:'900'}}>
                            Service Required For ?
                        </Text>

                        <Text style={{fontSize:16}}>
                            Fan Light Switch Repair
                        </Text>
                        </View>

                        <View style={{borderBottomWidth:0.1,marginTop:10}}>
                        <Text style={{fontSize:18,fontWeight:'900'}}>
                            Where do you require service ?
                        </Text>

                        <Text style={{fontSize:16}}>
                            Offline
                        </Text>
                        </View>
                    </View>


                    </View>

                <TouchableOpacity style={{marginTop:10,height:Screen_Height/11,width:Screen_Width,backgroundColor:'red',justifyContent:'center'}}>
                        <Text style={{alignSelf:'center',fontSize:24,color:"white"}}>Cancel Booking</Text>
                </TouchableOpacity>

                </ScrollView>
            </Container>
        );
       }
       else{
           return(
               <Load />
           );
       }
    }
}
export default Order;

