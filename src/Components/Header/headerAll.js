import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default class HeaderAll extends React.Component{
    render(){
        return(
            <View >
            <View style={style.headerField}>
              <View></View>
              <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <Image 
                  source={{uri: "https://firebasestorage.googleapis.com/v0/b/confess-karo.appspot.com/o/Confess%20Karo%20Images%2Flogo3.png?alt=media&token=99f2baf4-902c-43af-811a-2500082324a7"}} 
                  style={{width:100, height: 60,  resizeMode:"contain",justifyContent:'center', alignItems:'center' }}
                  />
              </View>
              <View></View>
            
            </View>
            </View>
          );
    }
}

const style = StyleSheet.create({
  headerField:{
    shadowRadius:10,
    paddingTop:10,
    paddingBottom:10,
    paddingEnd:10,
    paddingStart:10,
    flexDirection:"row",
    justifyContent:'space-between',
    backgroundColor: "#3949ab",
  },
    container:{
      backgroundColor:'#fff',
      justifyContent:"center",
      padding:20,
      alignItems:'center'
      
    },
    about:{
      color:"#fff",
      fontSize:20

    }
  
  });