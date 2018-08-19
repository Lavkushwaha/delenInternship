import React, { Component } from "react";
import { 
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    Image,
    ScrollView,
    FlatList
    } from "react-native";
import { Container, Content, Header, Left, Icon, Title, Body, Right } from "native-base";

import List from '../components/List';
import Load from '../Load';

import * as firebase from 'firebase';

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

class Main extends Component{


    constructor(){
        super();
        this.state ={
          data:'',
          isLoading:true
        }
      }
    
    componentDidMount() {
        var db = firebase.database();
        var ref = db.ref("/");
        // var ds = '';
        // that = this;
        // Attach an asynchronous callback to read the data at our posts reference
        try{
          
          ref.on('value', (snap) =>{
            dres=[],
            snap.forEach(ss => {
              var item = ss.val();
              item.key = ss.key;
              dres.push(item);
              
            })
            this.setState({
              data:dres,
              isLoading:false
            })
          });
         
        }
        catch(err){
          console.warn(err.message);
        }
      } 

    render(){
        

        if(!this.state.isLoading){
            return (
                <Container style={{ flex:1, backgroundColor:'#ddd'}}>
                    <Header style={{justifyContent:'center',backgroundColor:'#ddd'}}>
                        <Left>
                            <Icon name="list"/>
                        </Left>
                        <Body>
                            <Title style={{color:'#000'}}>List</Title>
                        </Body>
                        <Right />
                    </Header>
                    
                      
    
                        <ScrollView style={{flex:1}}>
                        
                        
                        
                        <FlatList
                            // pagingEnabled={true}
                            // horizontal={false}
                            data={this.state.data}
                            keyExtractor={(item, index) => item.key}
                            renderItem={({ item }) => (
                            <List name={item.Name} job={item.Job} status={item.Status}  id={item.Id} money={item.Money} onPress={() => this.props.navigation.navigate('Order',{id:item.key})}/>
                            )}
                            
                        />
    
                        </ScrollView>
    
                    
                </Container>
            );
        }

        else{
            return(<Load />);
        }
    }
}
export default Main;

